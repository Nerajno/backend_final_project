import React from 'react';
import { Grid, Header,} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Menu from './Menu'
import LoggedInUserCont from './LoggedInUserCont'


export default class LoggedInUser extends React.Component{
    render() {
        return (
            <div>
            <Menu />
            <LoggedInUserCont />
            </div>
        );
    }
}
