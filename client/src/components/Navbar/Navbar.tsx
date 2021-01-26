import './Navbar.scss'
import {Link} from 'react-router-dom'
import {Dispatch, SetStateAction} from "react";
import {Links} from "./Links";

export const Navbar = ({setSideToggle, show}: Props) => {
    const toggleHandler = () => {
        setSideToggle(prev => !prev)
    }
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>
                    <Link to="/">
                        Shop
                    </Link>
                </h1>
            </div>
            <Links/>
            <ul className={`ham__menu ${show && 'show'}`} onClick={toggleHandler}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

type Props = {
    setSideToggle: Dispatch<SetStateAction<boolean>>
    show: boolean
}