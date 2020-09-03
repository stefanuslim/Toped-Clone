import React from 'react'


const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#e3f2fd",
    paddingTop: "0px",
    paddingBottom: "0px"
  }

  const logoStyle = {
    width: "200px",
    height: "75px",
    marginLeft:"20px"
  }

  return (
    <nav className="navbar navbar-light" style={navbarStyle}>
      <img src="https://99sby.com/wp-content/uploads/2019/01/Tokopedia-Logo-Vector-VisualLogo.png" style={logoStyle} alt=""/>
    </nav>
  )
}

export default Navbar
