import './Navbar.scss'
import {Dispatch, SetStateAction} from "react";
import {Links} from "./Links";

export const Navbar = ({setSideToggle, show}: Props) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Shop</h1>
            </div>
            <Links/>
            <ul className={`ham__menu ${show && 'show'}`} onClick={() => setSideToggle(prev => !prev)}>
                <li> </li>
                <li> </li>
                <li> </li>
            </ul>
        </nav>
    )
}

type Props = {
    setSideToggle: Dispatch<SetStateAction<boolean>>
    show: boolean
}