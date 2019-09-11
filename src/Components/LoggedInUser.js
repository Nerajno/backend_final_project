import React from 'react';
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
