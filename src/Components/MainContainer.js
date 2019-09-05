import React, {Component} from 'react';
import  {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Login from './Login';
import { Register } from 'Components/Register';

class MainContainer extends React.Component{
    render(){
        return(
            <Router>
            {/* <div className="container-fluid" id="" verticalAlign='middle'>
            <p>Testing</p>
            <br/> 
              </div>*/}
            <Route path={"Register"} component={Register} />
            </Router>
    );
    }
}

export default MainContainer;