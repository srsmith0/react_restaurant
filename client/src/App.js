import React, { useState, useEffect } from 'react';
import './App.css';
import MenuList from './components/MenuList';
import axios from 'axios';
import MenuForm from './components/MenuForm';



function App() {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    axios.get('api/menus')
    .then((res) => {
    setMenus(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

function deleteMenu(id) {
  axios.delete(`api/menus/${id}`)
  .then((res) => {
   const newMenus = menus.filter((m) => m.id !== id);
   setMenus(newMenus)
  })
  .catch((err) => {
    console.log(err)
  })
  
}

function addMenu(menu) {
  axios.post('api/menus', {name: menu})
  .then((res) => {
    setMenus([res.data, ...menus])
  }).catch((err) => {
    console.log(err)
  })
}

// function updateMenu (id) {
//   axios.put(`api/menus/${id}`)
//   .then((res) => {

//   }).catch((err) => {
//     console.log(err)
//   })
// }

  return (
    <div>
      <h1>Menus</h1>
      <MenuList menus={menus}  deleteMenu={deleteMenu} />
      <p>Add a menu</p>
      <MenuForm addMenu={addMenu}/>
    </div>
  );
}

export default App;
