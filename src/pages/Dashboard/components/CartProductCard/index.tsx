import { X } from 'lucide-react'

import productImage from '../../../../assets/product.svg'
import {
  CartProductCardContainer,
  DeleteProductCartButton,
  Image,
  Price,
  PriceBadge,
  QuantityButton,
  QuantityContent,
  QuantityInput,
  QuantityLabel,
  QuantityPriceContainer,
  Title,
} from './styles'

export function CartProductCard() {
  return (
    <CartProductCardContainer>
      <DeleteProductCartButton type="button" title="Remover do carrinho">
        <X size={14} color="#ffff" />
      </DeleteProductCartButton>

      <Image src={productImage} alt="" />
      <Title>Apple Watch Series 4 GPS</Title>

      <QuantityPriceContainer>
        <QuantityContent>
          <QuantityLabel>Qtd:</QuantityLabel>

          <QuantityButton type="button" title="Diminuir quantidade">
            -
          </QuantityButton>

          <QuantityInput value={1} />

          <QuantityButton type="button" title="Aumentar quantidade">
            +
          </QuantityButton>
        </QuantityContent>

        <PriceBadge>
          <Price>R$399</Price>
        </PriceBadge>
      </QuantityPriceContainer>
    </CartProductCardContainer>
  )
}
