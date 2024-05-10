import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <Link to='login'>Login</Link>
                <Link to="signup">Signup</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar