import './CartItem.scss'
import {Link} from 'react-router-dom'

export const CartItem = () => {
    return (
        <div className="cartItem">
            <div className="cartItem__img">
                <img
                    src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="product name"/>
            </div>
            <Link to={`/products/${111}`}>
                <h2 className="cartItem__name">Canon</h2>
            </Link>
            <p className="cartItem__price">$499</p>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <div className="cartItem__delBtn">
                <button>
                    <i className="fas fa-trash"> </i>
                </button>
            </div>
        </div>
    )
}