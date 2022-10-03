import { useContext, createContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

const shoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider( {children} ){

    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function increaseItemQuantity(id){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
            return[...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else return item
                })
            }
        })
    }

    function decreaseItemQuantity(id){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
            return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else return item
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    return <shoppingCartContext.Provider value={{getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartQuantity, openCart, closeCart, isOpen, cartItems}}>
        {children}
        <ShoppingCart />
    </shoppingCartContext.Provider>
}

export default ShoppingCartProvider