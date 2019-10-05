import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard2= () => (
  <Card>
    <Image src='https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179' wrapped ui={false} />
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
