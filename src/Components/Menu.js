import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = ({ name }) => {
    this.setState({ activeItem: name })
    window.localStorage.clear();
    this.props.props.props.history.push('/Login')
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu navbar>
        <Menu.Item
          name='home'
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
          icon="home"
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
