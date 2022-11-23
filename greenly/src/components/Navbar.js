import './NavbarCSS.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Nav = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

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
                        <span className='cartCounter'>{getCartCount()}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav