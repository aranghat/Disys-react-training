import { useSelector } from "react-redux"
import Product from "../components/product";
import Cart from "../components/cart";

export default function ProductListPage() {

    let products = useSelector(state => state.products.products);

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
                </div>
                <div className="col-4">
                    <Cart />
                </div>
            </div>
        </div>
    )
}