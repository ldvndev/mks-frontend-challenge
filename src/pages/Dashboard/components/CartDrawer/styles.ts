import { css, styled } from 'styled-components'

interface CartSidebarProps {
  $isOpen: boolean
}

export const CartDrawerContainer = styled.aside<CartSidebarProps>`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  width: min(478px, 100vw);
  box-shadow: -5px 0 6px rgb(0 0 0 / 0.13);

  transition: transform 0.3s ease-in-out;

  ${(props) => css`
    background-color: ${props.theme.brand};
    transform: translateX(${props.$isOpen ? '0' : '100%'});
  `}

  @media(min-width: 640px) {
    width: 486px;
  }
`

export const CartDrawerContent = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 640px) {
    padding-top: 2.25rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-inline: 2rem;

  @media (min-width: 640px) {
    padding-inline: 3rem;
  }
`

export const Title = styled.span`
  font-size: 1.6875rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  background-color: ${(props) => props.theme.black};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Product = styled.div`
  overflow-y: auto;
  max-height: 55vh;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0.5rem 1.75rem;
  margin-top: 3.4375rem;
  margin-inline: 0.25rem;

  @media (min-width: 640px) {
    max-height: 59vh;
    margin-top: 4rem;
    padding-inline: 2.75rem;
    gap: 1.75rem;
  }
`
export const NoProductsText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem 2.625rem;

  span {
    font-size: 1.75rem;
    font-weight: 700;
  }

  color: ${(props) => props.theme.white};

  @media (min-width: 640px) {
    padding: 2.25rem 3rem 2.625rem;
  }
`

export const PurchaseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;

  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
