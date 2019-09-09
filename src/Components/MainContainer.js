import React from 'react';
import { Grid, Header,} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Landing from '../Landing'
import Login from './Login';
import  Register from './Register';


class MainContainer extends React.Component  {
	render() {
		return (
      
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
              <a href='/'>Welcome to Native Treats</a>
          </Header>
          <Router>
          <Switch>
              <Route exact path='/' render={() => <Landing />}/>
              <Route exact path='/Login' render={() => <Login />}/>
              <Route exact path='/Register' render={() => <Register />}/>   
              <Route /> 
              {/* log route above to render to specific route if logged in       */}
          </Switch>
          </Router>
            </Grid.Column>
          </Grid>
		);
	}
}

export default MainContainer;
