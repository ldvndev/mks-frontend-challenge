import { styled } from 'styled-components'

export const CartProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 1.3125rem 1rem;

  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
`

export const DeleteProductCartButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;
  width: 1.125rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.black};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Image = styled.img`
  object-fit: contain;
  height: 46px;
  width: 46px;
`

export const Title = styled.strong`
  margin-top: 0.875rem;

  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;
`

export const QuantityPriceContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const QuantityContent = styled.div`
  height: 2.125rem;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;

  border: 1px solid ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme.black};
`

export const QuantityLabel = styled.label`
  font-weight: 400;
  font-size: 3rem;
  display: none;
`

export const QuantityButton = styled.button`
  height: 100%;
  width: 1.75rem;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: 400;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const QuantityInput = styled.input`
  height: 100%;
  width: 3.125rem;
  padding-inline: 0.25rem;
  text-align: center;

  font-size: 1.125rem;
  font-weight: 400;
  border: transparent;
  border-right: 1px solid ${(props) => props.theme['gray-400']};
  border-left: 1px solid ${(props) => props.theme['gray-400']};

  outline: none;
`

export const PriceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.125rem;
  border-radius: 5px;

  background-color: ${(props) => props.theme['gray-700']};
`

export const Price = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1;

  color: ${(props) => props.theme.white};
`
