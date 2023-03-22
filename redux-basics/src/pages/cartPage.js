import Cart from "../components/cart";
import {useCart} from "../hooks/useCart";

export default function CartPage(){

    let [totalItems,totalTax,totalAmount,netAmount] = useCart({});

    return(
        <div>
            <Cart />
            <h2>Total Amount  : {totalAmount()}</h2>
            <h1>Tax : {totalTax()}</h1>
            <h1>Bill : {netAmount()}</h1>
        </div>
    )
}