import React , {useState} from 'react'

// CSS For Navbar Component
import './navbar.css'

const Navbar = () => {

  const [toggle,setToggle] = useState(false);  


  return (
    <div className='navbar'>
        <div className="nav-container">

            {/* TOGGLE NAV STARTS */}
            
            <ul className={`nav-toggle-list ${toggle && 'open'}`}>
                    <li className='toggle-list-item'>
                        <h1 className='h1'>hostell</h1>
                    </li>
                    <li className='toggle-list-item'>
                        Home
                    </li> 
                    <li className='toggle-list-item'>
                        Sell
                    </li> 
                    <li className='toggle-list-item'>
                        Items
                    </li> 
                    <li className='toggle-list-item'>
                        Login
                    </li> 
                    <li className='toggle-list-item'>
                        Register
                    </li> 
            </ul>

            {/* TOGGLE NAV ENDS */}

            <div className='left'>
            <h1>hostell</h1>
            </div>
            <div className='center'>
                <ul className='center-list'>
                    <li className='center-list-item'>
                        Home
                    </li> 
                    <li className='center-list-item'>
                        Sell
                    </li> 
                    <li className='center-list-item'>
                        Items
                    </li> 
                </ul>
            </div>
            <div className='right'>
                <button className='nav-btn'>
                   Register
                </button>
                <button className='nav-btn'>
                   Login
                </button>
            </div>
            {/* TOGGLE BUTTONS */}
            <div className='nav-toggle' 
            onClick={()=>setToggle(!toggle)}
            >
                    {toggle ? 
                    (<i className="fa-sharp fa-solid fa-xmark close"></i>):(
                        <i className="fa-sharp fa-solid fa-bars"></i>
                    )
                    }
            </div>
        </div>
    </div>
  )
}

export default Navbar 