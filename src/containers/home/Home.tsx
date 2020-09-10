import React, {useCallback, useMemo} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import Header from "../../components/header/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import './Home.css'
import dayjs from "dayjs";
import {
    exchangeFromTo,
    fetchCityData,
    hideCitySelector,
    hideDateSelector,
    setDepartDate,
    showCitySelector,
    showDateSelector,
    toggleHighSpeed
} from "./store/action";

import CitySelector from "../../components/cityselector/CitySelector";
import DateSelector from "../../components/dateselector/DateSelector";
import {h0} from "../../utils/fp";

const Home=(props:any):JSX.Element=>{
    const {
        from,
        to,
        isCitySelectorVisible,
        isDateSelectorVisible,
        cityData,
        isLoadingCityData,
        departDate,
        highSpeed,
        history,
        dispatch
    } = props

    const onBack=useCallback(()=>{
        console.log('onback render...')
    },[])

    const submit=()=>{
        history.push("/query",{from:from,to:to,departDate:dayjs(departDate).format('YYYY-MM-DD'),highSpeed:highSpeed})
    }

    const CitySelectorCbs=useMemo(()=>{
        return bindActionCreators({
            fetchCityData,
            hide:hideCitySelector
        },dispatch)
    },[])

    const DepartDateCbs=useMemo(()=>{
        return bindActionCreators({
            onClick:showDateSelector
        },dispatch)
    },[])

    const onSelectDate = useCallback((day) => {
        if (!day) {
            return;
        }

        if (day < h0()) {
            return;
        }

        dispatch(setDepartDate(day));
        dispatch(hideDateSelector())
    }, []);

    const HighSpeedCbs= useMemo(()=>{
        return bindActionCreators({
            toggle:toggleHighSpeed
        },dispatch)
    },[])

    const JourneyCbs = useMemo(()=>{
        return bindActionCreators({
            exchangeFromTo,
            showCitySelector
        },dispatch)
    },[])


    const DateSelectorCbs=useMemo(()=>{
        return bindActionCreators({
            onBack:hideDateSelector,
        },dispatch)
    },[])

    return (
        <div>
            <div className={'header-wrapper'}>
                <Header title={"火车票"} onBack={onBack}/>
            </div>
            <form className={'form'} action={'/query'}>
                <Journey from={from} to={to} {...JourneyCbs} />
                <DepartDate
                    time={departDate}
                    {...DepartDateCbs}
                />
                <HighSpeed highSpeed={highSpeed} {...HighSpeedCbs}/>
                <Submit onSubmit={submit} />
            </form>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...CitySelectorCbs}
            />
            <DateSelector
                show={isDateSelectorVisible}
                onSelect={onSelectDate}
                {...DateSelectorCbs}
            />
        </div>
    )
}

export default connect(
    (state:any)=>{
        return  state.homeReducer
    },
    (dispatch)=>{return {dispatch}  }
)(Home)