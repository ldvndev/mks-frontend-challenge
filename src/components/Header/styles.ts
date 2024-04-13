import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.brand};
  height: 101px;
  margin: 0 auto;
  padding: 1.25rem 1.4375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

  padding: 0.5rem 0.875rem;
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
`
