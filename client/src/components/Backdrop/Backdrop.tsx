import './Backdrop.scss'
import {Dispatch, SetStateAction} from "react";

export const Backdrop = ({setSideToggle}: Props) => {
    const toggleHandler = () => {
        setSideToggle(prevState => !prevState)
    }
    return (
        <div className="backdrop" onClick={toggleHandler}> </div>
    )
}

type Props = {
    setSideToggle: Dispatch<SetStateAction<boolean>>
}