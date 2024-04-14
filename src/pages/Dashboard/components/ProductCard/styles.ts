import { styled } from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 218px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);

  border-radius: 8px;
  overflow: hidden;
  padding-top: 1.125rem;

  button {
    background-color: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;

    width: 100%;
    margin-top: auto;
    padding: 0.5rem;

    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 138px;
  object-fit: contain;
`

export const ProductCardContent = styled.div`
  padding: 0.875rem 0.75rem 0.75rem 0.875rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
`

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875;

  color: ${(props) => props.theme['gray-600']};
`

export const PriceBadge = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 5px;
  padding: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1;
  color: ${(props) => props.theme.white};
`

export const ProductDescription = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 1.2;
  color: ${(props) => props.theme['gray-600']};
`
