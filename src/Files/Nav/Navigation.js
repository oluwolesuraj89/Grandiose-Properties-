import React from 'react';
import classes from '../Nav/Navigation.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../../Images/Logo.png'

function Navigation() {
  return (
    <div className={classes.body}>
      <div className={classes.NavContainer}>
        <nav className={classes.Navbar}>
          <NavLink to={'/'} className={classes.navbarbrand}href="#"><img src={Logo}/> Real Agent</NavLink>
          <div className={classes.MenuContainer}>
            <ul id="navMenu" className={classes.navMenu}>
              <li className="nav-item">
                <NavLink to={'/Buy'} className="nav-link active" aria-current="page" href="#">Buy</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/Rent'} className="nav-link" href="#">Rent</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/Commercial'} className="nav-link" href="#">Commercial</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/Findagent'} className="nav-link" >Find Agent</NavLink>
              </li>
              <div className={classes.topNavGroupbtns}>
                <NavLink to={'/Aboutus'} >ICON</NavLink>
                <NavLink to={'/Aboutus'} >About Us</NavLink>
                <button type="button" className={classes.Login}  ><NavLink to={'/Login'} >Log In</NavLink></button>
              </div>
            </ul>
          </div>
          <button className={classes.navbarToggler} type="button" >
            <i className="fas fa-bars"></i>
          </button>

          {/* </div> */}
        </nav>
      </div>
    </div>
  )
}

export default Navigation