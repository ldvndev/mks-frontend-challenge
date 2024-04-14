import styled from 'styled-components'

export const ProductCardSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  overflow: hidden;

  width: 218px;
`

export const SkeletonImage = styled.div`
  width: 100%;
  height: calc(138px + 1.125rem);

  background-color: ${(props) => props.theme['gray-400']};
`

export const Content = styled.div`
  padding: 0.875rem 0.75rem 0.75rem 0.875rem;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const SkeletonTitle = styled.div`
  height: 1rem;
  width: 90%;
  border-radius: 100vmax;

  background-color: ${(props) => props.theme['gray-400']};
`

export const SkeletonPrice = styled.div`
  padding: 0.375rem;
  border-radius: 5px;
  height: 1.5rem;
  width: 4rem;

  background-color: ${(props) => props.theme['gray-400']};
`

export const Description = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const SkeletonDescription = styled.div`
  height: 0.625rem;
  width: 100%;
  border-radius: 100vmax;

  background-color: ${(props) => props.theme['gray-400']};
`

export const SkeletonBuyButton = styled.div`
  margin-top: 0.875rem;
  width: 100%;
  padding: 0.5rem;
  height: 2rem;

  background-color: ${(props) => props.theme['gray-400']};
`
