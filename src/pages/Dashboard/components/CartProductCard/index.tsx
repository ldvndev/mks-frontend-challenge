import { Minus, Plus, X } from 'lucide-react'
import { useContext } from 'react'

import { CartDrawerContext } from '../../../../contexts/CartDrawerContext'
import { priceFormatter } from '../../../../utils/formatter'
import {
  CartProductCardContainer,
  DeleteProductCartButton,
  Image,
  Price,
  PriceBadge,
  QuantityButton,
  QuantityContent,
  QuantityInput,
  QuantityPriceContainer,
  Title,
} from './styles'

interface CartProductProps {
  products: {
    id: number
    name: string
    photo: string
    price: string
    quantity: number
  }
}

export function CartProductCard({ products }: CartProductProps) {
  const { removeCartItem: handleRemoveCartItem, changeCartItemQuantity } =
    useContext(CartDrawerContext)

  function handleIncrease() {
    changeCartItemQuantity(products.id, 'increase')
  }

  function handleDecrease() {
    if (products.quantity > 1) {
      changeCartItemQuantity(products.id, 'decrease')
    }
  }

  return (
    <CartProductCardContainer>
      <DeleteProductCartButton
        onClick={() => handleRemoveCartItem(products.id)}
        type="button"
        title="Remover do carrinho"
      >
        <X size={14} color="#ffff" />
      </DeleteProductCartButton>

      <Image src={products.photo} alt={products.name} />
      <Title>{products.name}</Title>

      <QuantityPriceContainer>
        <QuantityContent>
          <QuantityButton
            type="button"
            onClick={handleDecrease}
            title="Diminuir quantidade"
          >
            <Minus size={10} />
          </QuantityButton>

          <QuantityInput>{products.quantity}</QuantityInput>

          <QuantityButton
            onClick={handleIncrease}
            type="button"
            title="Aumentar quantidade"
          >
            <Plus size={10} />
          </QuantityButton>
        </QuantityContent>

        <PriceBadge>
          <Price>
            {priceFormatter
              .format(+products.price * products.quantity)
              .slice(0, -3)}
          </Price>
        </PriceBadge>
      </QuantityPriceContainer>
    </CartProductCardContainer>
  )
}
