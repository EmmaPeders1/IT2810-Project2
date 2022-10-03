import React from 'react'
import './Header.css'
import header from './header.png'


// As per the requirements, out project has one class based component
class Header extends React.Component {
  render() {
    return (
      <div id="HeaderContainer">
        <img id="headerImg" src={header} alt="MeshLab header"/>
      </div>
    )
  }
}

export default Header