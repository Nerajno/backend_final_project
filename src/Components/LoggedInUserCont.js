import React from 'react';

// Component Imports
import RestaurantCollection from './RestaurantCollection' 

export default class LoggedInUserCont extends React.Component {

 
 

    render() {
        console.log(this.props.user);
        return (
            <div>
                <RestaurantCollection reviews ={this.props.user} />
            </div>
        )
    }
}
