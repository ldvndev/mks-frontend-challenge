import cartImage from '../../assets/cart.svg'
import { CartButton, HeaderContainer, LogoContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <span>MKS</span>
        <span>Sistemas</span>
      </LogoContainer>

      <CartButton type="button" title="Open cart">
        <img src={cartImage} alt="" />
        <span>0</span>
      </CartButton>
    </HeaderContainer>
  )
}
