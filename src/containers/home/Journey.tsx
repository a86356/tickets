import React, {FC} from "react";
import './Journey.css'
import SwitchImg from './img/switch.svg'

interface Props{
    from:string,
    to:string,
    exchangeFromTo:()=>void,
    showCitySelector:(val:boolean)=>void
}

const Journey:FC<Props>=(props:Props):JSX.Element=>{
    const {
        from,
        to,
        exchangeFromTo,
        showCitySelector
    } = props
    return (
        <div className="journey">
            <div
                className="journey-station"
                onClick={() => showCitySelector(true)}
            >
                <input
                    type="text"
                    readOnly
                    name="from"
                    value={from}
                    className="journey-input journey-from"
                />
            </div>
            <div className="journey-switch" onClick={() => exchangeFromTo()}>
                <img src={SwitchImg} width="70" height="40" alt="switch"/>
            </div>
            <div
                className="journey-station"
                onClick={() => showCitySelector(false)}
            >
                <input
                    type="text"
                    readOnly
                    name="to"
                    value={to}
                    className="journey-input journey-to"
                />
            </div>
        </div>
    )
}

export default Journey