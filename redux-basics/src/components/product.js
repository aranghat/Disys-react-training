export default function Product(props) {
    return (
        <div className="col-md-4">
            <div className="card m-2">
                <img className="card-img-top" height={100} src={props.product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <p className="card-text">Price: {props.product.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}