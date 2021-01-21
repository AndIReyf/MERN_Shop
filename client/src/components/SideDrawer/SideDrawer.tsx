import './SideDrawer.scss'
import {Links} from "../Navbar/Links";

export const SideDrawer = ({show}:Props) => {
    return (
        <div className={`sideDrawer ${show && 'show'}`}>
            <Links show={show}/>
        </div>
    )
}

type Props = {
    show: boolean
}