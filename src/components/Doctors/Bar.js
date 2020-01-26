import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Patients from './Doctors'
import Welcome from './Welcome'
import Chat from './Chat'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{background: "#668fff"}}>
         <Menu secondary style={{paddingTop:10, marginLeft:10}}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='patients'
          active={activeItem === 'patients'}
          onClick={this.handleItemClick}
        />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={()=>window.location.href="/"}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
            
          {this.state.activeItem == "patients" ? <> <h2>Your patients :</h2> <Patients/>  </> : <> </>}
          {this.state.activeItem == "home" ? <><Welcome/>  </> : <> </>}
          {this.state.activeItem == "messages" ? <Chat/> : <> </>}



        </Segment>
      </div>
    )
  }
}