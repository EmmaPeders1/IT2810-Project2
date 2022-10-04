import React from 'react'
import './css/Header.css'
import header from './header.png'


// As per the requirements, this component is class based

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