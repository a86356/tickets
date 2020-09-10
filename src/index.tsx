import React from "react";
import ReactDom from "react-dom"
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import './reset.css'
import {combineReducers, createStore} from "redux";


function actionBuyCake(){
    return {
        type:"BUY_CATE"
    }
}



function actioniceCream(){
    return {
        type:"BUY_ICECREAM"
    }
}

const initCake = {
    cakenum:10
}

const initIcecream = {
    icenum:100
}

let obj={
    cake:function (state=initCake,action:any){
        let {type} = action;
        if(type=='BUY_CATE'){
            return {
                cakenum: state.cakenum-1
            }
        }
            return state
    },
    icecream:function iceCreamReducer (state=initIcecream,action:any){
        let {type} = action;
        if(type === 'BUY_ICECREAM'){
            return {
                icenum: state.icenum-1
            }
        }
        return state
    }
}

const s = createStore(combineReducers({
    ...obj
}))

s.subscribe(()=>{
    console.log( s.getState())

})

// s.dispatch(actionBuyCake())
// s.dispatch(actionBuyCake())
// s.dispatch(actionBuyCake())
// s.dispatch(actioniceCream())
// s.dispatch(actioniceCream())
// s.dispatch(actioniceCream())

ReactDom.render(
    <Provider store={store} >
        <App/>
    </Provider>,document.getElementById("root")
)

