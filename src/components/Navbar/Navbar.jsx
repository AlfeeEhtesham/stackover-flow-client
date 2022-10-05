import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assests/logo.png'
import search from '../../assests/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'

const Navbar = () => {
    var user = null
  return (
    <nav classNmae='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-items nav-logo'>
            <img src={logo} alt='logo'/>
            </Link>
            <Link to='/' className='nav-items nav-btn'>Abouts</Link>
            <Link to='/' className='nav-items nav-btn'>Products</Link>
            <Link to='/' className='nav-items nav-btn'>For Teams</Link>
            <form>

                <input type="text" placeholder='search..'/>
                <img src={search} alt='search' width="18" className='search-icon'/>
            
            </form>
         {user === null ?
           <Link to='/Auth' className='nav-items nav-links'>Log in</Link>:
           <>
           <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color='white' ><Link to='/user' style = {{color:'white', textDecoration:'none'}}>A</Link></Avatar>
           <button className ='nav-items nav-links'>Log Out</button>
           </>
         
        }

        </div>
    </nav>
  )
}

export default Navbar