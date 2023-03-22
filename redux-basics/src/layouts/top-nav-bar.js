import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TopNavigationBar(){

    let cart = useSelector(state => state.cart);

    return(
        <nav className="navbar navbar-expand bg-light border-bottom">
           <div className="container-fluid">
           <div className="navbar-brand"></div>
            <div className="navbar-menu">

            </div>
            <div class="ms-auto me-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" class="nav-link active mx-3"><i className="bi bi-house me-1"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" class="nav-link active mx-3"><i className="bi bi-cart me-1"></i>Cart <span className="badge bg-danger">{cart.cartItems.length}</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders" class="nav-link active mx-3"><i className="bi bi-bag-check me-1"></i>Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" class="nav-link active mx-3"><i className="bi bi-person me-1"></i>Login</Link>
                    </li>
                </ul>
            </div>
           </div>
        </nav>
    )
}