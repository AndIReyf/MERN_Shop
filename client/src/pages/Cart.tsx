import './Cart.scss'
import {CartItem} from "../components";

export const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__left">
                <h2 className="cart__title">Shopping Cart</h2>
                <CartItem/>
            </div>
            <div className="cart__right">
                <div className="info">
                    <p>Subtotal (1) items</p>
                    <p>Total: $499</p>
                </div>
                <div className="cart__btn">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}