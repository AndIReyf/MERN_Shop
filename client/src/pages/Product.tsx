import './Product.scss'

export const Product = () => {
    return (
        <div className="productPage">
            <div className="productPage__left">
                <div className="left__img">
                    <img src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="product"/>
                </div>
                <div className="left__info">
                    <h2 className="left__name">Canon</h2>
                    <p className="left__price">Price: <b>$499</b></p>
                    <p className="left__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo quam sint! Aut consectetur nesciunt quaerat quibusdam quos, sed. Aperiam atque eius fugit iure natus odio quos sint soluta voluptate.</p>
                </div>
            </div>
            <div className="productPage__right">
                <div className="right__info">
                    <p className="right__price">Price: <b>$499</b></p>
                    <p className="right__status">Status: <b>In stock</b></p>
                    <p className="right__qty">
                        Qty:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <div className="right__btn">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}