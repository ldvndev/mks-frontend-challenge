import { X } from 'lucide-react'
import { useContext } from 'react'

import { CartDrawerContext } from '../../../../contexts/CartDrawerContext'
import { priceFormatter } from '../../../../utils/formatter'
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
  const { isOpen, close, cartItems, cartItemsTotal } =
    useContext(CartDrawerContext)

  return (
    <CartSidebarContainer $isOpen={isOpen}>
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
          {cartItems.map((item) => {
            return <CartProductCard key={item.id} products={item} />
          })}
        </Product>
      </CardSidebarContent>

      <Footer>
        <span>Total:</span>
        <span>{priceFormatter.format(+cartItemsTotal).slice(0, -3)}</span>
      </Footer>

      <PurchaseButton type="button" title="Finalizar Compra">
        Finalizar Compra
      </PurchaseButton>
    </CartSidebarContainer>
  )
}
