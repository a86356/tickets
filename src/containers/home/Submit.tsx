import React, {memo} from "react";
import './Submit.css'

import { useHistory } from "react-router-dom";
import {connect} from "react-redux";

function Submit(props:any){

    const {onSubmit} = props


    const goNext = ()=>{
        onSubmit();
    }

    return (
        <div className="submit">
            <button type="submit" className="submit-button" onClick={goNext}> 搜索 </button>
        </div>
    );
}

export default connect(
    (state)=>{return  state},
    (dispatch)=>{ return  {dispatch}},
)(Submit)


