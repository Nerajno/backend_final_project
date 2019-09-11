import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard= () => (
  <Card>
    <Image src='https://images1.westword.com/imager/8-rivers-cafe/u/original/5169888/5183935.0.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jed's Treats</Card.Header> 
      {/* Place Restaurant */}
      <Card.Meta>
        <span className='date'>Established in 2015</span>
        {/* Website */}
      </Card.Meta>
      <Card.Description>
        Default Restaurant
        {/* address */}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
     
        <Icon name='comment icon' />
        22 Comments
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantCard
