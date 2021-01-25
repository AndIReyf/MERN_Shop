import {Link} from 'react-router-dom'
import './Product.scss'

export const Product = () => {
    return (
        <div className="product">
            <div className="product__img">
                <img src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Product"/>
            </div>
            <div className="product__info">
                <h2 className="product__name">Canon 23</h2>
                <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores cupiditate deleniti dolorem, enim fugiat illum incidunt modi natus praesentium quos sit veritatis voluptas. Accusamus obcaecati repellat sequi ullam veniam?</p>
                <p className="product__price">499$</p>
                <Link to={`/products/${11}`} className="info__btn">View</Link>
            </div>
        </div>
    )
}