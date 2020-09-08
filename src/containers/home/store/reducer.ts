import {Action} from "./action"

import {
    ACTION_SET_HIGHSPEED,
    ACTION_SET_CITYDATA,
    ACTION_SET_CURRENTSELECTEDLEFTCITY,
    ACTION_SET_FROM,
    ACTION_SET_ISCITYSELECTORVISIBLE,
    ACTION_SET_ISDATESELECTORVISIBLE,
    ACTION_SET_ISLOADINGCITYDATA,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE
} from './action'

export type NameState = {
    from: string;
    to:string;
    isCitySelectorVisible:boolean;
    currentSelectedLeftCity:boolean;
    cityData:null;
    isLoadingCityData:boolean;
    isDateSelectorVisible:boolean;
    highSpeed:boolean;
    dispatch?:any;
    departDate:any
}

export default {
    from:(state="北京",action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_FROM:
                return payload
        }
        return state;
    },
    to:(state="上海",action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_TO:
                return payload
        }
        return state;
    },
    isCitySelectorVisible:(state=false,action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_ISCITYSELECTORVISIBLE:
                return payload
        }

        return state;
    },
    currentSelectedLeftCity:(state=false,action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_CURRENTSELECTEDLEFTCITY:
                return payload
        }
        return state;
    },
    cityData:(state=null,action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_CITYDATA:
                return payload
        }
        return state;
    },
    isLoadingCityData:(state=false,action:Action)=>{
        const {type,payload} = action;
        switch (type){
            case ACTION_SET_ISLOADINGCITYDATA:
                return payload
        }
        return state;
    },
    isDateSelectorVisible:(state=false,action:Action)=>{

        const {type,payload} = action;
        switch (type){
            case ACTION_SET_ISDATESELECTORVISIBLE:
                return payload
        }
        return state;
    },
    highSpeed:(state=false,action:Action)=>{

        const {type,payload} = action;
        switch (type){
            case ACTION_SET_HIGHSPEED:
                return payload
        }
        return state;
    },
    departDate:(state=Date.now(),action:Action)=>{

        const {type,payload} = action;
        switch (type){
            case ACTION_SET_DEPART_DATE:
                return payload
        }
        return state;
    },

};