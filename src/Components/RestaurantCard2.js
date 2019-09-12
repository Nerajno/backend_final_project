import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard2= () => (
  <Card>
    <Image src='https://images1.westword.com/imager/8-rivers-cafe/u/original/5169888/5183935.0.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nana's Bakery</Card.Header> 
      {/* Place Restaurant */}
      <Card.Meta>
        <span className='date'>Since 1976</span>
        {/* Website */}
      </Card.Meta>
      <Card.Description>
        Catering to your sweetie tooth needs till 10pm nightly. 
        {/* address */}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
     
        <Icon name='comment icon' />
        78 Comments
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantCard2
