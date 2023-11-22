"use client"
import { Provider } from "react-redux"
import { store } from "./store"

type CartProviderProps = {
    children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default CartProvider