import { useContext } from 'react'

import cartImage from '../../assets/cart.svg'
import { CartDrawerContext } from '../../contexts/CartDrawerContext'
import { CartButton, HeaderContainer, LogoContainer } from './styles'

export function Header() {
  const { open, cartQuantity } = useContext(CartDrawerContext)

  return (
    <HeaderContainer>
      <LogoContainer>
        <span>MKS</span>
        <span>Sistemas</span>
      </LogoContainer>

      <CartButton type="button" onClick={open} title="Abrir carrinho">
        <img src={cartImage} alt="Carrinho de compra" />
        <span>{cartQuantity}</span>
      </CartButton>
    </HeaderContainer>
  )
}
