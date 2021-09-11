import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div  className="container">
              <Link  className="navbar-brand" to={'/'}>Home</Link>
                <div className="collapse navbar-collapse">
                   <ul className="navbar-nav ml-auto">          
                        <li className="nav-item">
                          <Link  to={'register'} className="nav-link">SIGN UP</Link>
                        </li>
                   </ul>
                </div>
            </div>
       </nav>
    )

}
export default Navbar
