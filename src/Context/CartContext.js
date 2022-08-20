import { useState, createContext } from "react"

const CartContext = createContext('valor por defecto')

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] =useState([])
    console.log(cart)


    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                }else{
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) =>{
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod=> prod.id === id )
    }

    const cantidad = () => {
        let suma = 0

        cart.forEach(product => {
            suma += product.quantity
        })

        return suma
    }

    const total = () => {
        let precioTotal = 0;

        cart.forEach(product => {
            precioTotal += parseInt(product.price) * product.quantity
            console.warn(precioTotal)
        })

        return precioTotal
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }
    
    return(
        <CartContext.Provider value={{ cart, addItem, cantidad, isInCart, removeItem, clearCart, getProductQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;