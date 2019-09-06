import React from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'



export default class Login extends React.Component {
  
  state = {
    username: "",
    password: ""
  }



  render() {
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to Your Account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='./Register'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
    );
  }
}
