import {Switch, Route, Redirect} from 'react-router-dom'
import './app.css'
import {Cart, Home, Product} from "./pages"
import {Navbar} from "./components/Navbar/Navbar";

export const App = () => {
    return (
        <>
            <Navbar/>
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
