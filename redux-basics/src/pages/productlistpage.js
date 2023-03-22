import { useSelector } from "react-redux"
import Product from "../components/product";

export default function ProductListPage() {

    let products = useSelector(state => state.products.products);

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}