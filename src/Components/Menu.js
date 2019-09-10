import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.localStorage.clear();
    //console.log(this.props.props.props.history,"Present");
    this.props.props.props.history.push('/Login')
    // window.localStorage.clear();
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
            icon='sign-out'
          />
          
        </Menu.Menu>
      </Menu>
    )
  }
}
