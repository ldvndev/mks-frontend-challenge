import { ShoppingBag } from 'lucide-react'

import productImage from '../../../../assets/product.svg'
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

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductImage src={productImage} />

      <ProductCardContent>
        <Header>
          <ProductTitle>Apple Watch Series 4 GPS</ProductTitle>

          <PriceBadge>
            <ProductPrice>R$300</ProductPrice>
          </PriceBadge>
        </Header>

        <ProductDescription>
          Redesigned from scratch and completely revised.
        </ProductDescription>
      </ProductCardContent>

      <button>
        <ShoppingBag size={16} color="#F9F9F9" />
        <span>Comprar</span>
      </button>
    </ProductCardContainer>
  )
}
