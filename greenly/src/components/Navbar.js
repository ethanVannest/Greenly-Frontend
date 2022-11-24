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
            <nav className='navbar'>
            <div className='navbar__logo'>
                <h2 className='title'>Greenly<i class="fa fa-leaf" aria-hidden="true"></i></h2>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to ='/' className='cart__link'>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to ='/cart' className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span className='cartlogo__badge'>{getCartCount()}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav