import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: auto;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['gray-300']};
`

export const Copyright = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;

  color: ${(props) => props.theme.black};
`
