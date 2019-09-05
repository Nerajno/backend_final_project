import React, {Component}  from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default class Register extends Component {
    render() {
        return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Create your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='username' iconPosition='left' placeholder='Username' />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder=' Confirm Password' type='password'/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Button color='teal' fluid size='large'>
           Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
}
}
