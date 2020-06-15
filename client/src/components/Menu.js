import React from 'react';
import {Button} from 'semantic-ui-react';

const Menu = ({name, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      {/* <Button onClick={()=> deleteMenu(id)}>Delete</Button>
      <Button onClick={()=> editMenu(id)}>Edit</Button> */}
    </div>
  )
}

export default Menu