import React from 'react';
//import  {render} from 'react-dom';
import { Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import  Register from './Register';

class MainContainer extends React.Component {
	render() {
		return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Welcome to Native Treats 
          </Header>
          <Router>
          <Switch>
              <Form size='large'>
                <Segment stacked>
                <Button color='teal' fluid size='large'> <Route path='/Login' component={Login} /> Sign In </Button>
                <Button color='teal' fluid size='large'> <Route path='/Register' component={Register} /> Register </Button>
                </Segment>
              </Form>
          </Switch>
          </Router>
            </Grid.Column>
          </Grid>
		);
	}
}

export default MainContainer;
