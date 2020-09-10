import React, {FC, useEffect, useMemo} from "react";
import './Query.css'
import Header from "../../components/header/Header";
import List from "./List";
import Bottom from "./Bottom";
import Nav from "../../components/Nav/Nav";
import {connect,} from "react-redux";

import {useCommon} from "../../hooks/useCommon";
import {
    setFrom,
    setTo,
    setDepartDate,
    setHighSpeed, setSearchParsed,
    nextDate,
    prevDate,

    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,

    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,

} from "./store/actions";
import {h0} from "../../utils/fp";
import useNav from "../../hooks/useNav";
import {bindActionCreators} from "redux";

type Props={

}

const Query:FC<Props> = (props:any):JSX.Element=>{
    const {
        trainList,
        from,
        to,
        departDate,
        highSpeed,
        searchParsed,
        orderType,
        onlyTickets,
        isFiltersVisible,
        ticketTypes,
        trainTypes,
        departStations,
        arriveStations,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
    } = props

    const {dispatch,history} = useCommon()
    const {
        isPrevDisabled,
        isNextDisabled,
        prev,
        next,
    } = useNav(departDate, dispatch, prevDate, nextDate);

    useEffect(()=>{
        let {from,to,departDate,highSpeed} = props.location.state;

        dispatch(setFrom(from))
        dispatch(setTo(to))
        dispatch(setDepartDate(h0(departDate)))
        dispatch(setHighSpeed(highSpeed))
        dispatch(setSearchParsed(true))
    },[])

    const bottomCbs = useMemo(() => {
        return bindActionCreators({
            toggleOrderType,
            toggleHighSpeed,
            toggleOnlyTickets,
            toggleIsFiltersVisible,
            setCheckedTicketTypes,
            setCheckedTrainTypes,
            setCheckedDepartStations,
            setCheckedArriveStations,
            setDepartTimeStart,
            setDepartTimeEnd,
            setArriveTimeStart,
            setArriveTimeEnd,
        }, dispatch);
    }, []);
    useEffect(()=>{
        if(searchParsed){
            //fetch
        }
    },[
        from,
        to,
        departDate,
        highSpeed,
        searchParsed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd
    ])

    const onBack=()=>{
        history.goBack()
    }

    if(!searchParsed){
        return <div>empty</div>
    }


    return (
        <div >
            <div className={'header-wrapper'}>
                <Header title={`${from} - ${to}`} onBack={onBack}/>
            </div>
            <Nav date={departDate}
                 isNextDisabled={isNextDisabled}
                 isPrevDisabled={isPrevDisabled}
                 next={next}
                 prev={prev}
            />
            <List/>
            <Bottom
                highSpeed={highSpeed}
                orderType={orderType}
                onlyTickets={onlyTickets}
                isFiltersVisible={isFiltersVisible}
                ticketTypes={ticketTypes}
                trainTypes={trainTypes}
                departStations={departStations}
                arriveStations={arriveStations}
                checkedTicketTypes={checkedTicketTypes}
                checkedTrainTypes={checkedTrainTypes}
                checkedDepartStations={checkedDepartStations}
                checkedArriveStations={checkedArriveStations}
                departTimeStart={departTimeStart}
                departTimeEnd={departTimeEnd}
                arriveTimeStart={arriveTimeStart}
                arriveTimeEnd={arriveTimeEnd}
                {...bottomCbs}
            />
        </div>
    )
}

export default connect(
    (state:any)=>{
        console.log(state)
        return  state.queryReducer
    },
    (dispatch)=>{ return  {dispatch}},
)(Query)


