import React from 'react'
import './css/Header.css'

// As per the requirements, out project has one class based component
class Header extends React.Component {
  render() {
    return (
      <div id="HeaderContainer">
        <h1>MeshLab</h1>
      </div>
    )
  }
}

export default Header