import React from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'


export default class Login extends React.Component {
   constructor(props){
     super(props)
  this.state={
    username: "",
    password: ""
   }
  }


  handleSubmit = (event) => {
    //event.preventDefault()
    console.log(this.state.username, this.state.password);
    fetch("http://localhost:3000/login", {
      method: 'POST',
      body: JSON.stringify({user: this.state}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
          .then(response => {
            localStorage.setItem("jwt", response.jwt)
        })
        
      // .then(response => console.log('Success', response))
  };
  

  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
 }

  render() {
    return (
    localStorage.jwt !== undefined ? <Redirect to='/LoggedInUser'/> : 
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to Your Account
      </Header>
      <Form onSubmit={this.handleSubmit} size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" type='text' value={this.state.username} onChange={this.handleChange}/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name="password" type='password' value={this.state.password} onChange={this.handleChange}/>
          <Button color='teal' fluid size='large'  type='submit'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='./Register'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid> );}
  
}