import React from 'react';

//imported Components
import RestaurantCard from './RestaurantCard'
import AddNewRestaurantCard from './AddNewRestaurant'

export default class RestaurantCollection extends React.Component {
    render() {
        return (
            <div>
                {/* Map over the user's RestaurantCollection */}
                <RestaurantCard />
                <AddNewRestaurantCard />
            </div>
        )
    }
}
