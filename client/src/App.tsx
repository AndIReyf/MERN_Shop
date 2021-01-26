import {Switch, Route, Redirect} from 'react-router-dom'
import './app.css'
import {Cart, Home, Product} from "./pages"
import {Navbar, Backdrop, SideDrawer} from "./components";
import {useState} from "react";

export const App = () => {
    const [sideToggle, setSideToggle] = useState<boolean>(false)

    return (
        <>
            <Navbar setSideToggle={setSideToggle} show={sideToggle}/>
            {sideToggle && <Backdrop setSideToggle={setSideToggle}/>}
            <SideDrawer setSideToggle={setSideToggle} show={sideToggle}/>
            <main>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route path='/products/:id' component={() => <Product/>}/>
                    <Route path='/cart' component={() => <Cart/>}/>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </>
    )
}