import { useQuery } from '@tanstack/react-query'
import { produce } from 'immer'
import { createContext, ReactNode, useState } from 'react'

import { getProduct, GetProductResponse } from '../api/getProduct'

interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  quantity: number
}

interface CartDrawerContextType {
  isOpen: boolean
  cartItemsTotal: number
  cartQuantity: number
  result: GetProductResponse | undefined
  cartItems: Product[]
  open: () => void
  close: () => void
  addProductToCart: (product: Product) => void
  removeCartItem: (cartItemId: number) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartDrawerContext = createContext({} as CartDrawerContextType)

interface CartSidebarProviderProps {
  children: ReactNode
}

export function CartDrawerProvider({ children }: CartSidebarProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const { data: result } = useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((acc, cartItem) => {
    return acc + Number(cartItem.price) * cartItem.quantity
  }, 0)

  function addProductToCart(item: Product) {
    const productAlreadyExistsInCart = result?.products.findIndex((product) => {
      return product.id === item.id
    })

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart !== -1) {
        draft.push(item)
      } else {
        draft[productAlreadyExistsInCart].quantity += item.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart]
        draft[productExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <CartDrawerContext.Provider
      value={{
        isOpen,
        open,
        close,
        result,
        addProductToCart,
        cartItemsTotal,
        removeCartItem,
        cartItems,
        changeCartItemQuantity,
        cartQuantity,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  )
}
