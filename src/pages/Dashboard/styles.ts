import { styled } from 'styled-components'

export const DashboardContainer = styled.main`
  margin: 7.25rem auto;
  max-width: 938px;
`

export const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.9375rem 1.375rem;
  justify-items: center;

  @media (min-width: 640px) {
    display: grid;
    gap: 1.53125rem 1.1875rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 760px) {
    display: grid;
    gap: 1.53125rem 1.1875rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    display: grid;
    gap: 1.9375rem 1.375rem;
    grid-template-columns: repeat(4, 1fr);
  }
`
