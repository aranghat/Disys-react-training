import Cart from "../components/cart";
import useAuth from "../hooks/useAuth";
import {useCart} from "../hooks/useCart";


export default function CartPage(){
    let [totalItems,totalTax,totalAmount,netAmount] = useCart({});
    let [isLoggedIn] = useAuth();
    //let navigate = useHistory();
    return(
        <div>
            <Cart />
            <h2>Total Amount  : {totalAmount()}</h2>
            <h1>Tax : {totalTax()}</h1>
            <h1>Bill : {netAmount()}</h1>

            <button type="button" className="btn btn-primary"
             onClick={() => {
                if(isLoggedIn())
                 {
                    window.location.href = "/orders";
                 }
                 else
                    window.location.href = "/login";
            }}>Place the order</button>
        </div>
    )
}