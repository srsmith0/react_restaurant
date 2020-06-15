import React, { useState } from 'react';
import { Form, FormInput, FormButton } from 'semantic-ui-react';


const MenuForm =({addMenu}) => {
  const [menu, setMenu] = useState('');

  function handleSubmit (e) {
    addMenu(menu)
  };

  const handleChange=(e) => {
    setMenu(e.target.value);
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
      label={"Menu"}
      placeholder={"Enter menu name"}
      required
      value={menu}
      onChange={handleChange}
       />
      <FormButton>Add</FormButton>
    </Form>
  )
}

export default MenuForm