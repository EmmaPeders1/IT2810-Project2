import React from 'react'
import './css/Footer.css'


// As per the requirements, this component is class based

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="FooterContainer">
          <p className='text'>Created by Group 17&trade;</p>
        </div>
      </footer>
    )
  }
}

export default Footer