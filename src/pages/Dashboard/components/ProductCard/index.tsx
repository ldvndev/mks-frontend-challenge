import { ShoppingBag } from 'lucide-react'

import { priceFormatter } from '../../../../utils/formatter'
import {
  Header,
  PriceBadge,
  ProductCardContainer,
  ProductCardContent,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from './styles'

interface ProductCardProps {
  products: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
  }
}

export function ProductCard({ products }: ProductCardProps) {
  return (
    <ProductCardContainer>
      <ProductImage src={products.photo} />

      <ProductCardContent>
        <Header>
          <ProductTitle>{products.name}</ProductTitle>
          <PriceBadge>
            <ProductPrice>
              {priceFormatter.format(+products.price).slice(0, -3)}
            </ProductPrice>
          </PriceBadge>
        </Header>

        <ProductDescription>{products.description}</ProductDescription>
      </ProductCardContent>

      <button title="Comprar produto">
        <ShoppingBag size={16} color="#F9F9F9" />
        <span>Comprar</span>
      </button>
    </ProductCardContainer>
  )
}
