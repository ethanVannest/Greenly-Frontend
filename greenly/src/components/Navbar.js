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
                    <Link to ='/'>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to ='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartCounter'>0</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav