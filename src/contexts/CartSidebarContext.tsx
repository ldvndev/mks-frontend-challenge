import { createContext, ReactNode, useState } from 'react'

interface CartSidebarContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const CartSidebarContext = createContext({} as CartSidebarContextType)

interface CartSidebarProviderProps {
  children: ReactNode
}

export function CartSidebarProvider({ children }: CartSidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <CartSidebarContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CartSidebarContext.Provider>
  )
}
