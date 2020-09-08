import React from "react";
import { connect } from 'react-redux'
import Home from "./containers/home/Home";
import Query from "./containers/query/Query";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import './common.css'

const App = (props:any) =>{


    return (
        <Router >
            <Switch>
                <Route exact  path={'/'} component={Home} />
                <Route exact  path={'/home'} component={Home} />
                <Route exact  path={'/query'} component={Query} />
            </Switch>
        </Router>

    )
}

export default connect(
    (state)=>{
        return state
    },
    (dispatch)=>{
        return {dispatch}
    }
)(App);