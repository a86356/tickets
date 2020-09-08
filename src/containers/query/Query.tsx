import React, {FC} from "react";
import './Query.css'
import Header from "../../components/header/Header";
import List from "./List";
import Bottom from "./Bottom";
import Nav from "../../components/Nav/Nav";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
type Props={

}

const Query:FC<Props> = (props:any):JSX.Element=>{
    const {from,to,departDate,highSpeed} = props.location.state;
    const {history}  =props

    const onBack=()=>{
        history.goBack()
    }

    return (
        <div className={"header"}>
            <div className={'header-wrapper'}>
                <Header title={"查询条件"} onBack={onBack}/>
            </div>
            <Nav title={"q"} onBack={()=>{}}/>
            <List/>
            <Bottom/>
        </div>
    )
}

export default connect(
    (state)=>{return  state},
    (dispatch)=>{ return  {dispatch}},
)(Query)


