import React from 'react';
import {Card, Container} from 'semantic-ui-react';

//imported Components
import RestaurantCard1 from './RestaurantCard1'
import RestaurantCard2 from './RestaurantCard2'
import RestaurantCard3 from './RestaurantCard3'
import RestaurantCard from './RestaurantCard'
import AddNewRestaurantCard from './AddNewRestaurant'

export default class RestaurantCollection extends React.Component {
    render() {
        const allReviews = {...this.props.reviews}.reviews;
        console.log(allReviews);

        return (
            <div>
            <div class="ui four cards">
            <RestaurantCard1 />
            <RestaurantCard2 />
            <RestaurantCard3 />
            <RestaurantCard />
        </div>
        <div class="ui four cards">
            <AddNewRestaurantCard />
        </div>
        </div>
        )
    }
}



               