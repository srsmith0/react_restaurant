import React, { useState, useEffect } from 'react';
import './App.css';
import MenuList from './components/MenuList';
import axios from 'axios';



function App() {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    axios.get('/api/menus')
    .then((res) => {
      console.log("axios called ")
      setMenus(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <h1>Menus</h1>
      <MenuList menus={menus} />
    </div>
  );
}

export default App;
