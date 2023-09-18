import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import $ from 'jquery';


export default class Navbar extends Component {
  render() {
    return <>
    <div className=' fixed-top'>
    <nav id='nav' className="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bold" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-white fs-5 fw-bold p-2 mx-2 rounded" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fs-5 fw-bold p-2 mx-2 rounded" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fs-5 fw-bold p-2 mx-2 rounded" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
    </>
  }
}
