import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard1= () => (
  <Card>
    <Image src='https://images1.westword.com/imager/8-rivers-cafe/u/original/5169888/5183935.0.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>The Empty Bowl</Card.Header> 
      {/* Place Restaurant */}
      <Card.Meta>
        <span className='date'>Bubbling since 2001</span>
        {/* Website */}
      </Card.Meta>
      <Card.Description>
        Concocting Bowls of International Soups catering to variety of needs. 
        {/* address */}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
     
        <Icon name='comment icon' />
        40 Comments
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantCard1
