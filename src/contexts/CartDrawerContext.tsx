import { createContext, ReactNode, useState } from 'react'

interface CartDrawerContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const CartDrawerContext = createContext({} as CartDrawerContextType)

interface CartSidebarProviderProps {
  children: ReactNode
}

export function CartDrawerProvider({ children }: CartSidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <CartDrawerContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CartDrawerContext.Provider>
  )
}
