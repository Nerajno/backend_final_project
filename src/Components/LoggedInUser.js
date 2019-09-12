import React from 'react';
// Component Imports
import Nav from './Menu'
import LoggedInUserCont from './LoggedInUserCont'
import Footer from './Footer'


export default class LoggedInUser extends React.Component{
        state ={
             user :null
         }

        componentDidMount(){
           // console.log(this.props);
            const url = "http://localhost:3000/users";
            // const response = await fetch(url);
            // const data = await response.json();
            // this.setState({cat: data.results[0], loading: false });
            fetch(url)
            .then(res => res.json())
            .then(user => this.setState({user: user[0]}))
          }

          
          render() {
            //console.log(this.state.user);
        return (
            <div>
            <Nav props={this.props} />
            <LoggedInUserCont user={this.state.user} />
            <Footer />
            </div>
        );
    }
}


