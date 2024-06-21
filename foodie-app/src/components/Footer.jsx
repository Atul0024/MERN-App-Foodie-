import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
    <div>
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 bg-success ">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-light">Features</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-light">Pricing</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-light">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-light">About</Link></li>
    </ul>
    <p className="text-center text-light">© 2024 Go Foodie, Inc</p>
  </footer>
  
    </div>
      
    </div>
  )
}
