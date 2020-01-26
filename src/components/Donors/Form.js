import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Formes = () => (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"578px", backgroundColor:"#668fff"}}>
  <Form style={{backgroundColor:"white", padding:30, borderRadius:7}}> 
      <h2>Please enter your scan results here:</h2>
    <Form.Field>
      <label>Blood typing (ABO compatibility)</label>
      <Button primary>+ Upload</Button>
    </Form.Field>
    <Form.Field>
      <label>Tissue Typing</label>
      <Button primary>+ Upload</Button>
    </Form.Field>
    <Form.Field>
      <label>Percent Reactive Antibody (PRA)</label>
      <Button primary>+ Upload</Button>
    </Form.Field>
    <Form.Field>
      <label>Serum Crossmatch</label>
      <Button primary>+ Upload</Button>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' href="/match">Match</Button>
  </Form>
  </div>
)

export default Formes