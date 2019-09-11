import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Redirect, Router, Route } from 'react-router-dom';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 username: "",
			 password: "",
			 password_conformation:"",
			 email: "",
		};
	}

	state = {
		redirect: false
	  }

	handleSubmit = () => {
		//event.preventDefault()
		//console.log(this.state.username, this.state.password);
		fetch('http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify({ user: this.state }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then({redirect: true})
			.then(console.log("Bugs everywhere"));
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
		// console.log(this.state);
	};

	setRedirect = () => {
		this.setState({
		  redirect: true
		})
	  }

	renderRedirect = () => {
		if (this.state.redirect) {
		  return <Redirect to="/Login" />
		}
	  }

	render() {
		return (
			<Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						Create Your Account
					</Header>
					<Form onSubmit={this.handleSubmit} size="large">
						<Segment stacked>
							<Form.Input
								fluid
								icon="user"
								iconPosition="left"
								placeholder="Username"
								name="username"
								type="text"
								value={this.state.value}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								name="password"
								type="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Confirm Password"
								name="password_confirmation"
								type="password"
								value={this.state.password_confirmation}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								icon="mail"
								iconPosition="left"
								placeholder="E-mail Address"
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							{this.renderRedirect()}
							<Button color="teal" fluid size="large" type="submit" onClick={this.setRedirect}>
								Register
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}
