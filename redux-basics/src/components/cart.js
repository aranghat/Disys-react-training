import { useSelector } from "react-redux"

export default function Cart(){

    let cart = useSelector(state => state.cart);

    return(
        <div>
            <h1>Cart</h1>
            <ul className="list-group">
                {cart.cartItems.map(item => (<li className="list-group-item">
                    <div className="row">
                        <div className="col">{item.name}</div>
                        <div className="col-3">{item.price}</div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-sm btn-danger">
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </li>))}
            </ul>
        </div>
    )
}