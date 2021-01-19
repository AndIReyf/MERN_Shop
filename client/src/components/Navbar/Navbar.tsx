import {Link} from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Shop</h1>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="navbar__cart">
                        <i className="fas fa-shopping-cart"> </i>
                        <span>Cart</span>
                        <span className="cartLogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <ul className="ham__menu">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}