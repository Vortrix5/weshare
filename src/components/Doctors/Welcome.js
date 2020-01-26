import React, { Component } from 'react'
import { Message, Image,  Divider, Form, Label } from 'semantic-ui-react'
import doc from "../../images/doc.png"

class Welcome extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
          <>
        <Message
          onDismiss={this.handleDismiss}
          header='Welcome Back Doc!'
          content="We have missed and we hope you're going to save new lives!"
        />
        <Image src={doc} size='small' circular />
        <br></br>
        <Form>
    <Form.Field>
      <input type='text' value="Dr Dre" placeholder='First name' />
      <Label basic color='blue' pointing>
        Your First name
      </Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label basic color='blue'  pointing='below'>
        Your Last name 
      </Label>
      <input type='text' value="Jenkins"  placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Label basic color='blue' pointing='below'>
        Your email
      </Label>
      <input type='text' value="dr.dre@jenkins.co" placeholder='Email' />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' value="Dr. Jenkins" placeholder='Username' />
      <Label basic color='blue' pointing='left'>
        Your username
      </Label>
    </Form.Field>
    <Divider />
  </Form>
        </>

      )
    }

    return (
        <></>
    )
  }
}

export default Welcome
