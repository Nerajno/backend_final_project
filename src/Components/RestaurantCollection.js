import React from 'react';

//imported Components
import RestaurantCard from './RestaurantCard'
import AddNewRestaurantCard from './AddNewRestaurant'

export default class RestaurantCollection extends React.Component {
    render() {
        //console.log({...this.props.reviews}.reviews);
        const allReviews = {...this.props.reviews}.reviews;
        console.log(allReviews);

        return (
            <div className="container fluid">
            {/* //     {allReviews.map(review =>   */}
            {/* //         <div class="ui card">
            //         <div class="content">
            //           <a class="header">Rating{review.rating}</a>
            //           <div class="meta">
            //             <span class="date">Joined in 2013</span>
            //           </div>
            //           <div class="description">
            //             {review.comment}
            //           </div>
            //         </div>
            //       </div>)
            //         }; */}

            {allReviews.map(review => <div>< RestaurantCard  props={review} /></div>)}    
            </div>
        )
    }
}



               