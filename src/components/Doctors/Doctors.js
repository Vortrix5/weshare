import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import MenuExampleSecondaryPointing from './Bar'

const Patients = () => (
    <>
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Blood Type</Table.HeaderCell>
        <Table.HeaderCell>Tissue Typing</Table.HeaderCell>
        <Table.HeaderCell>Percent Reactive Antibody (PRA)</Table.HeaderCell>
        <Table.HeaderCell>Serum Crossmatch</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>14</Table.Cell>
        <Table.Cell>A+</Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell positive>Yes</Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>65</Table.Cell>
        <Table.Cell>B+</Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell positive>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>43</Table.Cell>
        <Table.Cell>O-</Table.Cell>
        <Table.Cell warning ><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell warning><a>Upload</a></Table.Cell>
        <Table.Cell negative>No</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='8'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button size='small'>Confirm</Button>
          <Button disabled size='small'>
            Confirm All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </>
)

export default Patients
