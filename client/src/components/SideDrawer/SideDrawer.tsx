import './SideDrawer.scss'
import {Links} from "../Navbar/Links";
import {Dispatch, SetStateAction} from "react";

export const SideDrawer = ({show, setSideToggle}:Props) => {
    return (
        <div className={`sideDrawer ${show && 'show'}`}>
            <Links setSideToggle={setSideToggle}  show={show}/>
        </div>
    )
}

type Props = {
    show: boolean
    setSideToggle: Dispatch<SetStateAction<boolean>>
}