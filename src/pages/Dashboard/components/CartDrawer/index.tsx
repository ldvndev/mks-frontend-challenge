import { X } from 'lucide-react'
import { useContext } from 'react'

import { CartDrawerContext } from '../../../../contexts/CartDrawerContext'
import { priceFormatter } from '../../../../utils/formatter'
import { CartProductCard } from '../CartProductCard'
import {
  CartDrawerContainer,
  CartDrawerContent,
  CloseButton,
  Footer,
  Header,
  NoProductsText,
  Product,
  PurchaseButton,
  Title,
} from './styles'

export function CartDrawer() {
  const { isOpen, close, cartItems, cartItemsTotal } =
    useContext(CartDrawerContext)

  return (
    <CartDrawerContainer $isOpen={isOpen}>
      <CartDrawerContent>
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
          {cartItems?.length ? (
            cartItems.map((item) => (
              <CartProductCard key={item.id} products={item} />
            ))
          ) : (
            <NoProductsText>Seu carrinho está vazio.</NoProductsText>
          )}
        </Product>
      </CartDrawerContent>

      <Footer>
        <span>Total:</span>
        <span>{priceFormatter.format(+cartItemsTotal).slice(0, -3)}</span>
      </Footer>

      <PurchaseButton type="button" title="Finalizar Compra">
        Finalizar Compra
      </PurchaseButton>
    </CartDrawerContainer>
  )
}
