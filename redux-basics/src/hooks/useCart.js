import { useSelector } from "react-redux";

export default function useCart({})
{
    let cart = useSelector(state => state.cart);

    const totalItems = () => cart.cartItems.length;
    function totalTax()
    {
        let totalAmount = cart.cartItems.reduce((d,total) => total + (d.price * .18));
        return totalAmount;
    }

    function totalAmount(){
        let totalAmount = cart.cartItems.reduce((d,total) => total += d.price);
        return totalAmount;
    }

    function netAmount()
    {
        return totalTax() + totalAmount();
    }

    return [totalItems,totalTax,totalAmount,netAmount];
}