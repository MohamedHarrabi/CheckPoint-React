import React from "react";

import logo from "../movie.svg"


const NavBar = () =>{
    return( <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand ml-5 text-white" href="#" ><img src={logo}  alt="logo" style={{ width:'42px'}} />Movie-ON</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <a className="nav-link text-white text-uppercase"  href="#">Home&nbsp;<i class="fas fa-home"></i>
           <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" href="#">Link</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled text-white text-uppercase ml-5" href="#" tabindex="-1" aria-disabled="true">New</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white text-uppercase ml-5" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
      </form>
    </div>
  </nav>)
}

export default NavBar;