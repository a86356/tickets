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
