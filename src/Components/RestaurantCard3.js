import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const RestaurantCard3= () => (
  <Card>
    <Image src='https://cdn2.imperialhotels.co.uk/london-pub-food.jpg?mtime=20161118124552' wrapped ui={false} />
    <Card.Content>
      <Card.Header>The Smoking Pig</Card.Header> 
      {/* Place Restaurant */}
      <Card.Meta>
        <span className='date'>Established in 1990</span>
        {/* Website */}
      </Card.Meta>
      <Card.Description>
        A relaxed environment catering to a slow and relaxed dining experience.
        {/* address */}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
     
        <Icon name='comment icon' />
        12 Comments
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantCard3
