import React from 'react'
import logo from '../../images/syndio-logo.svg'

const Logo = () => {
  return (
    <div className="move-left"><img data-testid="logo" className="logo-size" src={logo} alt="logo" /></div>
  )
}

export default Logo