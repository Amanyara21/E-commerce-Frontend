import React, {useRef} from 'react'
import menuButton from "../Assets/MenuButton.png"
import { Link } from 'react-router-dom'
import "./Menu.css"
const Menu = () => {

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='menubar'>
    <img onClick={dropdown_toggle} className='menu-dropdown' src={menuButton} alt="" />
      <ul ref={menuRef} className="menu">
      <div className="MenuName">
        <img onClick={dropdown_toggle} className='menu-dropdown' src={menuButton} alt="" />
        <p>Close</p>
      </div>
        <li><Link to='/add'>AddIn</Link></li>
        <li><Link to='/show'>Show</Link></li>
      </ul>
    </div>
  )
}

export default Menu