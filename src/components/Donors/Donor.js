import React, { Component } from 'react'
import { Input, Label, Menu, Icon } from 'semantic-ui-react'
import "./donor.css"

export default class Part extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{backgroundColor:"#668fff"}}>
        <br/>
      <center style={{display:"flex", justifyContent:"center", alignItems:"center", height:"578px"}}>
      <Menu vertical style={{width:550, paddingTop:10}}>  
        <h3>What do you want to donate?</h3>
        <Menu.Item
          name='inbox'
          active={activeItem === 'inbox'}
          onClick={this.handleItemClick}
        >
          Intestine
        </Menu.Item>

        <Menu.Item
          name='spam'
          active={activeItem === 'spam'}
          style={{backgroundColor:"#f77e7e"}}
          onClick={()=>window.location.href="/form"}
        >    Kidney
        </Menu.Item>

        <Menu.Item
          name='updates'
          active={activeItem === 'updates'}
          onClick={this.handleItemClick}
        >
          Lung
        </Menu.Item>
        <Menu.Item
          name='updates'
          active={activeItem === 'updates'}
          onClick={this.handleItemClick}
        >
          Pancreas
        </Menu.Item>
      </Menu>
      </center>
      </div>
    )
  }
}
