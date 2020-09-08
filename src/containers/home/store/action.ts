export type Action = {
    type:string,
    payload:any
}

export const ACTION_SET_FROM = "SET_FROM"
export const ACTION_SET_TO  ="SET_TO"
export const ACTION_SET_ISCITYSELECTORVISIBLE = "SET_ISCITYSELECTORVISIBLE"
export const ACTION_SET_CURRENTSELECTEDLEFTCITY = "SET_CURRENTSELECTEDLEFTCITY"
export const ACTION_SET_CITYDATA  ="SET_CITYDATA"
export const ACTION_SET_ISLOADINGCITYDATA='SET_ISLOADINGCITYDATA'
export const ACTION_SET_ISDATESELECTORVISIBLE='SET_ISDATESELECTORVISIBLE'
export const ACTION_SET_HIGHSPEED='SET_HIGHSPEED'
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';

export const setFrom=(from:string):Action=>{
    return {
        type:ACTION_SET_FROM,
        payload:from
    }
}

export const setTo=(to:string):Action=>{
    return {
        type:ACTION_SET_TO,
        payload:to
    }
}


export const setIsLoadingCityData=(loading:boolean):Action=>{
    return {
        type:ACTION_SET_ISLOADINGCITYDATA,
        payload:loading
    }
}

export const setIsDataVisible=(visible:boolean):Action=>{
    return {
        type:ACTION_SET_ISDATESELECTORVISIBLE,
        payload:visible
    }
}

export const toggleHighSpeed=()=>{
    return (dispatch:any,getState:any)=>{
        const {highSpeed} =  getState();
        dispatch({
            type:ACTION_SET_HIGHSPEED,
            payload:!highSpeed
        })
    }
}


export const showCitySelector= (currentSelectorLeftCity:any)=>{
    return (dispatch:any)=>{
        dispatch({
            type:ACTION_SET_ISCITYSELECTORVISIBLE,
            payload:true
        })
        dispatch({
            type:ACTION_SET_CURRENTSELECTEDLEFTCITY,
            payload:currentSelectorLeftCity
        })
    }
}

export const hideCitySelector= (currentSelectorLeftCity:any):Action=>{
    return {
        type:ACTION_SET_ISCITYSELECTORVISIBLE,
        payload:false
    }
}

export const setDepartDate = (day:string)=>{
    return {
        type:ACTION_SET_DEPART_DATE,
        payload:day
    }
}

export const setSelectedCity= (city:string)=>{
    return (dispatch:any,getState:any)=>{
        const {currentSelectorLeftCity} = getState();
        if(currentSelectorLeftCity){
            dispatch(setFrom(city))
        }else{
            dispatch(setTo(city))
        }
    }
}

export const showDateSelector=():Action=>{
    return {
        type:ACTION_SET_ISDATESELECTORVISIBLE,
        payload:true
    }
}
export const hideDateSelector=():Action=>{
    return {
        type:ACTION_SET_ISDATESELECTORVISIBLE,
        payload:false
    }
}



export const exchangeFromTo=()=>{
    return (dispatch:any,getState:any)=>{
        const {from,to} = getState();


        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}


export const setCityData=(data:any):Action=>{
    return {
        type:ACTION_SET_CITYDATA,
        payload:data
    }
}

export const fetchCityData = ()=>{
    return (dispatch:any,getState:any)=>{
        const { isLoadingCityData } = getState();
        if(isLoadingCityData)return

        const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');

        if (Date.now() < cache.expires) {
            dispatch(setCityData(cache.data));
            return;
        }

        dispatch(setIsLoadingCityData(true))
        fetch("/rest/cities?_"+Date.now())
            .then(res=>res.json())
            .then(cityData=>{


                localStorage.setItem(
                    'city_data_cache',
                    JSON.stringify({
                        expires: Date.now() + 60 * 1000,
                        data: cityData,
                    }),
                );


                dispatch(setCityData(cityData))
                dispatch(setIsLoadingCityData(false))
            })
            .catch(error=>{
                dispatch(setIsLoadingCityData(false))
            })
    }
}