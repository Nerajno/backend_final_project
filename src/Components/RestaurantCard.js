import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard= () => (
  <Card>
    <Image src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/medium/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jed's Treats</Card.Header> 
      {/* Place Restaurant */}
      <Card.Meta>
        <span className='date'>Established in 2015</span>
        {/* Website */}
      </Card.Meta>
      <Card.Description>
        Test RestaurantCard
        {/* address */}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantCard
