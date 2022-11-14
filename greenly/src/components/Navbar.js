import './NavbarCSS.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
            <nav className='nav'>
            <div className='navLogo'>
                <h2>Greenly</h2>
            </div>

            <ul className='navLinks'>
                <li>
                    <Link to =''>
                    
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav