import React from 'react';
import Menu from './Menu';

export default function MenuList ({menus, deleteMenu}){
  return (
    <div>
      {menus.map(m => {
       return <Menu deleteMenu={deleteMenu} key={m.id} {...m} />
      })}
    </div>
  )
}