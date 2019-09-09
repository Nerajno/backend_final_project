import React from 'react';

//imported Components
import RestaurantCard from './RestaurantCard'

export default class RestaurantCollection extends PureComponent {
    render() {
        return (
            <div>
                {/* Map over the user's RestaurantCollection */}
                <RestaurantCard />
            </div>
        )
    }
}
