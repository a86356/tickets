import React, {FC, useEffect, useMemo, useState} from "react";
import classnames from 'classnames'
import './index.css'
interface Props{
    show:boolean,
    cityData:null,
    isLoading:boolean,
    hide:(val:boolean)=>void,
    fetchCityData:()=>void,

}

const CitySelector:FC<Props>=(props):JSX.Element=>{
    const {
        show,
        cityData,
        isLoading,
        hide,
        fetchCityData
    } = props
    const [searchKey, setSearchKey] = useState('');
    const key = useMemo(() => searchKey.trim(), [searchKey]);

    useEffect(()=>{
        if(!show || cityData || isLoading) {
            return
        }
        //fetchCityData();
    },[show,cityData,isLoading])

    return (
        <div className={classnames("city-selector",{hidden:!show})}>
            <div className="city-search">
                <div className="search-back" onClick={() => hide(true)}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        className="search-input"
                        placeholder="城市、车站的中文或拼音"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    onClick={() => setSearchKey('')}
                    className={classnames('search-clean', {
                        hidden: key.length === 0,
                    })}>
                    &#xf063;
                </i>
            </div>
        </div>
    )
}

export default CitySelector

