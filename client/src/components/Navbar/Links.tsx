import {Link} from "react-router-dom"
import './Links.scss'
import {Dispatch, SetStateAction} from "react";

export const Links = ({show, setSideToggle}: Props) => {
    const toggleHandler = () => {
        setSideToggle && setSideToggle(prev => !prev)
    }
    return (
        <ul className={`navbar__links ${show && 'show'}`} onClick={toggleHandler}>
            <li>
                <Link to="/cart" className="navbar__cart">
                    <i className="fas fa-shopping-cart"> </i>
                    <span>Cart</span>
                    <span className="cartLogo__badge">0</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    Products
                </Link>
            </li>
        </ul>
    )
}

type Props = {
    show?: boolean
    setSideToggle?: Dispatch<SetStateAction<boolean>>
}