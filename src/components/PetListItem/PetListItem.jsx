import React from 'react';
import { ListGroup } from 'react-bootstrap';
import "./PetListItem.scss"

const PetListItem = () => {
  return (
    <ListGroup.Item action href="#" style={{minHeight: '50px'}}>
      Link 1
    </ListGroup.Item>
   );
}

export default PetListItem;