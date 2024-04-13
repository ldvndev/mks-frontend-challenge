import { useContext } from 'react'

import cartImage from '../../assets/cart.svg'
import { CartSidebarContext } from '../../contexts/CartSidebarContext'
import { CartButton, HeaderContainer, LogoContainer } from './styles'

export function Header() {
  const { open } = useContext(CartSidebarContext)

  return (
    <HeaderContainer>
      <LogoContainer>
        <span>MKS</span>
        <span>Sistemas</span>
      </LogoContainer>

      <CartButton type="button" onClick={open} title="Open cart">
        <img src={cartImage} alt="" />
        <span>0</span>
      </CartButton>
    </HeaderContainer>
  )
}
