import { styled } from 'styled-components'

export const CartProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.3125rem 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 1.125rem;
  }
`

export const DeleteProductCartButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: -0.5rem;
  right: -0.5rem;

  aspect-ratio: 1 / 1;
  width: 1.125rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.black};

  @media (min-width: 640px) {
    top: -0.375rem;
    right: -0.425rem;
    width: 1.125rem;
    font-size: 0.625rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Image = styled.img`
  object-fit: contain;
  height: 100px;

  @media (min-width: 640px) {
    height: 60px;
  }
`

export const Title = styled.strong`
  margin-top: 0.875rem;

  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;

  @media (min-width: 640px) {
    margin-top: 0;
    margin-inline: 1.3125rem 0.5625rem;
    text-align: left;
  }
`

export const QuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 640px) {
    margin-top: 0;
    margin-left: auto;
  }
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

  @media (min-width: 640px) {
    height: 1.5rem;
  }
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

  @media (min-width: 640px) {
    width: 1.125rem;
    font-size: 0.75rem;
  }
`

export const QuantityInput = styled.span`
  text-align: center;
  padding: 0 0.5rem;

  font-size: 1.125rem;
  font-weight: 400;
  border: transparent;
  border-right: 1px solid ${(props) => props.theme['gray-400']};
  border-left: 1px solid ${(props) => props.theme['gray-400']};

  @media (min-width: 640px) {
    width: 4ch;
    font-size: 0.625rem;
  }
`

export const PriceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.125rem;
  border-radius: 5px;
  width: 5rem;

  background-color: ${(props) => props.theme['gray-700']};

  @media (min-width: 640px) {
    padding: 0;
    background-color: transparent;
  }
`

export const Price = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;

  color: ${(props) => props.theme.white};

  @media (min-width: 640px) {
    font-size: 0.875rem;
    color: ${(props) => props.theme.black};
  }
`
