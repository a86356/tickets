import {Action} from "../../../redux/actions/commonAction";

import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_HIGH_SPEED,
    ACTION_SET_TRAIN_LIST,
    ACTION_SET_ORDER_TYPE,
    ACTION_SET_ONLY_TICKETS,
    ACTION_SET_TICKET_TYPES,
    ACTION_SET_CHECKED_TICKET_TYPES,
    ACTION_SET_TRAIN_TYPES,
    ACTION_SET_CHECKED_TRAIN_TYPES,
    ACTION_SET_DEPART_STATIONS,
    ACTION_SET_CHECKED_DEPART_STATIONS,
    ACTION_SET_ARRIVE_STATIONS,
    ACTION_SET_CHECKED_ARRIVE_STATIONS,
    ACTION_SET_DEPART_TIME_START,
    ACTION_SET_DEPART_TIME_END,
    ACTION_SET_ARRIVE_TIME_START,
    ACTION_SET_ARRIVE_TIME_END,
    ACTION_SET_IS_FILTERS_VISIBLE,
    ACTION_SET_SEARCH_PARSED,
} from './actionTypes'
import {ORDER_DEPART} from "../constant";
import {h0} from "../../../utils/fp";

type Name = {
    from:null,
    to:any,
    departDate:any,
    highSpeed :boolean,
    tranList:[],
    orderType:any,
    onlyTickets:false,
    ticketTypes:[],
    checkedTicketTypes:{},
    trainTypes:[],
    checkedTrainTypes:{},
    departStations:[],
    checkedDepartStations:{},
    arriveStations:[],
    checkedArriveStations:{},
    departTimeStart: number,
    departTimeEnd: number,
    arriveTimeStart: number,
    arriveTimeEnd: number,
    isFiltersVisible: boolean,
    searchParsed: boolean,
}

const init:Name={
    from:null,
    to:null,
    departDate:h0(Date.now()),
    highSpeed :false,
    tranList:[],
    orderType:ORDER_DEPART,
    onlyTickets:false,
    ticketTypes:[],
    checkedTicketTypes:{},
    trainTypes:[],
    checkedTrainTypes:{},
    departStations:[],
    checkedDepartStations:{},
    arriveStations:[],
    checkedArriveStations:{},
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFiltersVisible: false,
    searchParsed: false,
}
const queryReducer = (state=init,action:Action)=> {
    const {type,payload} = action
    switch (type){
        case ACTION_SET_FROM:
            return {...state,from:payload}
        case ACTION_SET_TO:
            return {...state,to:payload}
        case ACTION_SET_DEPART_DATE:

            return {...state,departDate:payload}
        case ACTION_SET_HIGH_SPEED:
            return {...state,highSpeed:payload}
        case ACTION_SET_TRAIN_LIST:
            return {...state,tranList:payload}
        case ACTION_SET_ORDER_TYPE:
            return {...state,orderType:payload}
        case ACTION_SET_ONLY_TICKETS:
            return {...state,onlyTickets:payload}
        case ACTION_SET_TICKET_TYPES:
            return {...state,ticketTypes:payload}
        case ACTION_SET_CHECKED_TICKET_TYPES:
            return {...state,checkedTicketTypes:payload}
        case ACTION_SET_TRAIN_TYPES:
            return {...state,trainTypes:payload}
        case ACTION_SET_CHECKED_TRAIN_TYPES:
            return {...state,checkedTicketTypes:payload}
        case ACTION_SET_DEPART_STATIONS:
            return {...state,departStations:payload}
        case ACTION_SET_ARRIVE_STATIONS:
            return {...state,arriveStations:payload}
        case ACTION_SET_CHECKED_ARRIVE_STATIONS:
            return {...state,checkedArriveStations:payload}
        case ACTION_SET_DEPART_TIME_START:
            return {...state,departTimeStart:payload}
        case ACTION_SET_DEPART_TIME_END:
            return {...state,departTimeEnd:payload}
        case ACTION_SET_ARRIVE_TIME_START:
            return {...state,arriveTimeStart:payload}
        case ACTION_SET_CHECKED_DEPART_STATIONS:
            return {...state,checkedDepartStations:payload}
        case ACTION_SET_ARRIVE_TIME_END:
            return {...state,arriveTimeEnd:payload}
        case ACTION_SET_IS_FILTERS_VISIBLE:
            return {...state,isFiltersVisible:payload}
        case ACTION_SET_SEARCH_PARSED:
            return {...state,searchParsed:payload}
        default:
            return state
    }
}
export default queryReducer;