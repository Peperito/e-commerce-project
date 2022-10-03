import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import mockData from "../data/mockData";

export function CartItemCard ({id}) {

    const { removeFromCart, increaseItemQuantity, decreaseItemQuantity, getItemQuantity} = useShoppingCart()
    const item = mockData.find(item => item.id === id)
    const quantity = getItemQuantity(item.id)

    if(item == null) return null

    return (
        <div className="flex flex-row items-center justify-between">
            <img className="h-20 w-20 flex-shrink-0" src={item.imageUrl} alt={item.imageAlt} />
            <div className="text-lg font-semibold text-slate-900">
                {item.model}
                <p>{ formatCurrency(item.price * quantity)}</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center ml-2">
                    <button className="text-white bg-orange-600 p-2 rounded-lg border-slate-800 border-2 ml-2"
                    onClick={() => decreaseItemQuantity(item.id) }> - </button>
                    <p className="mx-2"> <b>{getItemQuantity(item.id)}</b> </p>
                    <button className="text-white bg-orange-600 p-2 rounded-lg border-slate-800 border-2"
                    onClick={() => increaseItemQuantity(item.id) }> + </button>
                    </div>
                    <button className="w-auto text-white bg-red-600 px-2 rounded-lg border-slate-800 border-2 mt-2"
                    onClick={() => removeFromCart(item.id) }>
                        Remove
                    </button>
            </div>
        </div>
    )
}

export default CartItemCard