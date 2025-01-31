import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
   const token  = localStorage.getItem("token")
    return (
        <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left">Quote App</Link>
          <ul id="nav-mobile" className="right">
            {
              token ?
              <>
               <li><Link to="/quotes">Quotes</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/create">Create</Link></li>
               <li><Link to="/" onClick={()=>{
                 localStorage.removeItem("token")
               }}>Logout</Link></li>

              </>:
              <>
               <li><Link to="/">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
               </>
            }
            
          </ul>
        </div>
      </nav>
    )
}
