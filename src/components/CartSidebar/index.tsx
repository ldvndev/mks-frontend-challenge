import { X } from 'lucide-react'
import { useContext } from 'react'

import { CartSidebarContext } from '../../contexts/CartSidebarContext'
import {
  CardSidebarContent,
  CartSidebarContainer,
  CloseButton,
  Footer,
  Header,
  PurchaseButton,
  Title,
} from './styles'

export function CartSidebar() {
  const { isOpen, close } = useContext(CartSidebarContext)

  return (
    <CartSidebarContainer isOpen={isOpen}>
      <CardSidebarContent>
        <Header>
          <Title>
            Carrinho <br />
            de compras
          </Title>

          <CloseButton onClick={close}>
            <X size={20} color="#ffff" />
          </CloseButton>
        </Header>
      </CardSidebarContent>

      <Footer>
        <span>Total:</span>
        <span>R$798</span>
      </Footer>

      <PurchaseButton>Finalizar Compra</PurchaseButton>
    </CartSidebarContainer>
  )
}
