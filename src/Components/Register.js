import React  from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


export default class Register extends React.Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Create Your Account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' />
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address' />
              <Button color='teal' fluid size='large'>
                Register
          </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
