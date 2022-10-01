import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white fw-bold" to="">Dhruv Khunt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link mx-1 text-white fw-bold" to="/myprotfolio">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link mx-1 text-white fw-bold" to="/myprotfolio">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link mx-1 text-white fw-bold" to="/myprotfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link mx-1 text-white fw-bold" to="/myprotfolio">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link mx-1 text-white fw-bold" to="/myprotfolio">Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Nav