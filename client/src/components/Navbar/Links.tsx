import {Link} from "react-router-dom"
import './Links.scss'

export const Links = ({show}: Props) => {
    return (
        <ul className={`navbar__links ${show && 'show'}`}>
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
    )
}

type Props = {
    show?: boolean
}