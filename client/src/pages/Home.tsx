import './Home.scss'
import {Product} from "../components";

export const Home = () => {
    return (
        <div className="home">
            <h2 className="home__title">Latest products</h2>
            <div className="home__product">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}