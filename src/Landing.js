import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react';
import {  Link } from 'react-router-dom';



export default function Landing() {
    return(
        <div>
    <Form size='large'>
           <Segment stacked>
          <Link to='./Login'> <Button color='teal' fluid size='large'> Login </Button> </Link>
          <br/>
          <Link to='./Register'> <Button color='teal' fluid size='large'> Register </Button> </Link>
          </Segment>
      </Form>
    </div>
    )

}