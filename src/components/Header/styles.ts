import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.brand};
  height: 101px;
  margin: 0 auto;
  padding: 1.25rem 1.4375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding-block: 0.9rem;
    padding-inline: 2.1rem 1.9625rem;
  }

  @media (min-width: 640px) {
    padding-block: 1.1125rem;
    padding-inline: 2.95rem 2.4875rem;
  }

  @media (min-width: 768px) {
    padding-block: 1.325rem;
    padding-inline: 3.8rem 3.0125rem;
  }

  @media (min-width: 1024px) {
    padding-block: 1.5375rem;
    padding-inline: 4.65rem 3.5375rem;
  }

  @media (min-width: 1280px) {
    padding-block: 1.75rem;
    padding-inline: 5.5rem 4.0625rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};

  span:first-child {
    font-size: 2rem;
    font-weight: 600;
    line-height: 0.8;
  }

  span:last-child {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 85px;

  padding: 0.818rem 0.9375rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.black};
  }

  @media (min-width: 640px) {
    font-size: 0.9375rem;
    gap: 0.875rem;
    padding-block: 0.625rem;
    padding-inline: 0.625rem 1.3125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    gap: 1rem;
    padding-block: 0.75rem;
    padding-inline: 0.9375rem 1.6875rem;
  }
`
