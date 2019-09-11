import React, { Component } from 'react';
import {
   Container,
   Segment,
   List
} from 'semantic-ui-react'
export default class Footer extends Component {
   render() {
       return (
               <Segment inverted vertical>
                   <Container textAlign='center'>
                       <List horizontal inverted divided link size='small'>
                           <List.Item as='a' href='#'>
                               Contact Us
                           </List.Item>
                           <List.Item as='a' href='#'>
                            {/* Edit me */}
                           </List.Item>
                           <List.Item as='a' href='#'>
                               Privacy Policy
                           </List.Item>
                       </List>
                   </Container>
               </Segment>
       )
   }
}