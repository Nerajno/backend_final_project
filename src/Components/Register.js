import React  from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
 }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Create Your Account
      </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange}/>
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' value={this.state.password} onChange={this.handleChange} />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' value={this.state.password} onChange={this.handleChange} />
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address' type='text' value={this.state.email} onChange={this.handleChange} />
              <Button color='teal' fluid size='large' type="submit">
                Register
          </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
