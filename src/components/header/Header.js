import React from 'react'
import Logo from './Logo'
import Dropdown from './Dropdown'
import './styles/header.css'

const Header = ()=> {
  
  return (
    <div className='d-flex flex-wrap align-items-center syndio-black'>
        <Logo/>
        <Dropdown />
    </div>
  )
}

export default Header