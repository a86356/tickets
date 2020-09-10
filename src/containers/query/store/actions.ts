import {h0} from "../../../utils/fp";
import {
    ACTION_SET_ARRIVE_STATIONS,
    ACTION_SET_ARRIVE_TIME_END,
    ACTION_SET_ARRIVE_TIME_START,
    ACTION_SET_CHECKED_ARRIVE_STATIONS,
    ACTION_SET_CHECKED_DEPART_STATIONS,
    ACTION_SET_CHECKED_TICKET_TYPES,
    ACTION_SET_CHECKED_TRAIN_TYPES,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_DEPART_STATIONS,
    ACTION_SET_DEPART_TIME_END,
    ACTION_SET_DEPART_TIME_START,
    ACTION_SET_FROM,
    ACTION_SET_HIGH_SPEED, ACTION_SET_IS_FILTERS_VISIBLE,
    ACTION_SET_ONLY_TICKETS, ACTION_SET_ORDER_TYPE, ACTION_SET_SEARCH_PARSED,
    ACTION_SET_TICKET_TYPES,
    ACTION_SET_TO,
    ACTION_SET_TRAIN_LIST,
    ACTION_SET_TRAIN_TYPES
} from "./actionTypes";
import {ORDER_DEPART, ORDER_DURATION} from "./constant";


export function setFrom(from:string) {
    return {
        type: ACTION_SET_FROM,
        payload: from,
    };
}
export function setTo(to:string) {
    return {
        type: ACTION_SET_TO,
        payload: to,
    };
}
export function setDepartDate(departDate:any) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate,
    };
}
export function setHighSpeed(highSpeed:boolean) {
    return {
        type: ACTION_SET_HIGH_SPEED,
        payload: highSpeed,
    };
}

export function toggleHighSpeed() {
    return (dispatch:any, getState:any) => {
        const { highSpeed } = getState().queryReducer;

        dispatch(setHighSpeed(!highSpeed));
    }
}
export function setTrainList(trainList:any) {
    return {
        type: ACTION_SET_TRAIN_LIST,
        payload: trainList,
    };
}
export function toggleOrderType() {
    return (dispatch:any, getState:any) => {
        const { orderType } = getState().queryReducer;
        if (orderType === ORDER_DEPART) {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                payload: ORDER_DURATION,
            });
        } else {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                payload: ORDER_DEPART,
            });
        }
    };
}
export function toggleOnlyTickets() {
    return (dispatch:any, getState:any) => {
        const { onlyTickets } = getState().queryReducer;

        dispatch({
            type: ACTION_SET_ONLY_TICKETS,
            payload: !onlyTickets,
        });
    };
}
export function setTicketTypes(ticketTypes:any) {
    return {
        type: ACTION_SET_TICKET_TYPES,
        payload: ticketTypes,
    };
}
export function setCheckedTicketTypes(checkedTicketTypes:any) {
    return {
        type: ACTION_SET_CHECKED_TICKET_TYPES,
        payload: checkedTicketTypes,
    };
}
export function setTrainTypes(trainTypes:any) {
    return {
        type: ACTION_SET_TRAIN_TYPES,
        payload: trainTypes,
    };
}
export function setCheckedTrainTypes(checkedTrainTypes:any) {
    return {
        type: ACTION_SET_CHECKED_TRAIN_TYPES,
        payload: checkedTrainTypes,
    };
}
export function setDepartStations(departStations:any) {
    return {
        type: ACTION_SET_DEPART_STATIONS,
        payload: departStations,
    };
}
export function setCheckedDepartStations(checkedDepartStations:any) {
    return {
        type: ACTION_SET_CHECKED_DEPART_STATIONS,
        payload: checkedDepartStations,
    };
}
export function setArriveStations(arriveStations:any) {
    return {
        type: ACTION_SET_ARRIVE_STATIONS,
        payload: arriveStations,
    };
}
export function setCheckedArriveStations(checkedArriveStations:any) {
    return {
        type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
        payload: checkedArriveStations,
    };
}
export function setDepartTimeStart(departTimeStart:number) {
    return {
        type: ACTION_SET_DEPART_TIME_START,
        payload: departTimeStart,
    };
}
export function setDepartTimeEnd(departTimeEnd:number) {
    return {
        type: ACTION_SET_DEPART_TIME_END,
        payload: departTimeEnd,
    };
}
export function setArriveTimeStart(arriveTimeStart:number) {
    return {
        type: ACTION_SET_ARRIVE_TIME_START,
        payload: arriveTimeStart,
    };
}
export function setArriveTimeEnd(arriveTimeEnd:number) {
    return {
        type: ACTION_SET_ARRIVE_TIME_END,
        payload: arriveTimeEnd,
    };
}
export function toggleIsFiltersVisible() {
    return (dispatch:any, getState:any) => {
        const { isFiltersVisible } = getState().queryReducer;

        dispatch({
            type: ACTION_SET_IS_FILTERS_VISIBLE,
            payload: !isFiltersVisible,
        });
    };
}
export function setSearchParsed(searchParsed:any) {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
    };
}

export function nextDate() {
    return (dispatch:any, getState:any) => {
        const { departDate } = getState().queryReducer;
        let newdate = h0(departDate) + 86400 * 1000

        dispatch(setDepartDate(newdate))
    };
}
export function prevDate() {
    return (dispatch:any, getState:any) => {
        const { departDate } = getState().queryReducer;

        dispatch(setDepartDate(h0(departDate) - 86400 * 1000));
    };
}