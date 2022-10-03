import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItemCard from "./CartItemCard"

export function ShoppingCart() {

    const {isOpen, closeCart, cartItems} = useShoppingCart()

    return (
        
        <>
        { isOpen ? 
        <div className="fixed h-screen p-4 overflow-y-auto bg-white w-80 z-10 top-28 right-0">
            <div className="flex flex-row items-center justify-between mb-4">
                <h2 className="text-slate-800 text-xl font-bold">Your items</h2>
                <button className="border-2 border-slate-800 p-2 rounded-md"
                onClick={closeCart}>X</button>
            </div>
            <div className="flex flex-col gap-3">
                {cartItems.map(item => (
                    <CartItemCard key={item.id} {...item} />
                ))}
            </div>
            
        </div>
        
        : ""}
        {console.log(isOpen)}
        </>
    )
}