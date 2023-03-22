import { useSelector } from "react-redux"

export default function ProductListPage() {

    let products = useSelector(state => state.products.products);

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <h2>{product.name}</h2>
                ))}
            </div>
        </div>
    )
}