import React from 'react'

const Menu = ({menu}) => {
  return (
    <div>
        <h2>Our menu</h2>
        <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.price} ({item.category})
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Menu