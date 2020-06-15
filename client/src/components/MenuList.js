import React from 'react';
import Menu from './Menu';

export default function MenuList ({menus}){
  return (
    <div>
      {menus.map(m => {
       return <Menu key={m.id} {...m} />
      })}
    </div>
  )
}