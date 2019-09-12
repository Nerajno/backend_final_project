import React from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'


const AddNewRestaurantModal = () => (
    <Modal trigger={<Button>Add</Button>} closeIcon>
    <Header icon='pencil alternate' content='Create Reviews/ Restaurants' />
    <Modal.Content>
      <p>
        Nope, We still have bugs, this is cool looking though.
      </p>

    </Modal.Content>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://media.giphy.com/media/3cVrr8HGrMGVoAGXdd/giphy.gif' />
      </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default AddNewRestaurantModal