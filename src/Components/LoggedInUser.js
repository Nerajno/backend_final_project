import React from 'react';
//import { Grid, Header,} from 'semantic-ui-react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Nav from './Menu'
import LoggedInUserCont from './LoggedInUserCont'
import Footer from './Footer'


export default class LoggedInUser extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
            <Nav props={this.props} />
            <LoggedInUserCont />
            <Footer />
            </div>
        );
    }
}
