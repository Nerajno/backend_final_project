import React from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'


export default class Login extends React.Component {
   constructor(props){
     super(props)
  this.state={
    username: null,
    //password: null
   }
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.username, this.state.password);

  }

  
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    });
   //console.log(this.state.username);
 }

  render() {
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to Your Account
      </Header>
      <Form onSubmit={this.handleSubmit} size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='username' value={this.state.username} onChange={this.handleChange}/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' value={this.state.password} />
          <Button color='teal' fluid size='large'  type='submit'>
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
