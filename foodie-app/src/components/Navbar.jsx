import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">Go Foodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fs-4" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item fs-5">
          <Link className="nav-link" to="/">Link</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><Link className="dropdown-divider" to='/'>Another Action</Link></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
       
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
       <Link to="/login" className='btn btn-outline-light ml-5'>Login</Link>
       <Link to="/createuser" className='btn btn-outline-light ml-3'>Signup</Link>
      </form>
    </div>
  </div>
</nav>
        </div>
  )
}
