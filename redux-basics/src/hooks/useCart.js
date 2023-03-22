import { useSelector } from "react-redux";

export function useCart({})
{
    let cart = useSelector(state => state.cart);

    const totalItems = () => cart.cartItems.length;
    function totalTax()
    { 
        let ta = totalAmount();
        return ta * .18;

    }

    function totalAmount(){
        let t = 0;
        for(var p of cart.cartItems)
        {
            t += p.price;
        }

        return t;
    }

    function netAmount()
    {
        return totalTax() + totalAmount();
    }

    return [totalItems,totalTax,totalAmount,netAmount]
}