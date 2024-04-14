import { X } from 'lucide-react'
import { useContext } from 'react'

import { CartDrawerContext } from '../../../../contexts/CartDrawerContext'
import { CartProductCard } from '../CartProductCard'
import {
  CardSidebarContent,
  CartSidebarContainer,
  CloseButton,
  Footer,
  Header,
  Product,
  PurchaseButton,
  Title,
} from './styles'

export function CartDrawer() {
  const { isOpen, close } = useContext(CartDrawerContext)

  return (
    <CartSidebarContainer isOpen={isOpen}>
      <CardSidebarContent>
        <Header>
          <Title>
            Carrinho <br />
            de compras
          </Title>

          <CloseButton onClick={close} title="Fechar modal">
            <X size={20} color="#ffff" />
          </CloseButton>
        </Header>

        <Product>
          <CartProductCard />
        </Product>
      </CardSidebarContent>

      <Footer>
        <span>Total:</span>
        <span>R$798</span>
      </Footer>

      <PurchaseButton type="button" title="Finalizar Compra">
        Finalizar Compra
      </PurchaseButton>
    </CartSidebarContainer>
  )
}
