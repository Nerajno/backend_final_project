import React from 'react';

import {  Grid, Header,} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../Landing'
//import LinkButton from './LinkButton';

import Login from './Login';
import  Register from './Register';

class MainContainer extends React.Component  {

	render() {
		return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Welcome to Native Treats 
          </Header>
          <Router>
          <Switch>
              <Route exact path='/' render={() => <Landing />}/>
              <Route exact path='/Login' render={() => <Login />}/>
              <Route exact path='/Register' render={() => <Register />}/>
              {/* <Route exact path='/' render={() => <Landing />}/> */}
          </Switch>
          {/* <div>
          <Form size='large'>
                 <Segment stacked>
                <Link to='./Login'> <Button color='teal' fluid size='large'> Login </Button> </Link>
                <br/>
                <Link to='./Register'> <Button color='teal' fluid size='large'> Register </Button> </Link>
                </Segment>
            </Form>
          </div> */}
          </Router>
            </Grid.Column>
          </Grid>
		);
	}
}

export default MainContainer;
