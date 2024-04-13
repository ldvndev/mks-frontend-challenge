import { Header } from '../../components/Header'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

export function Dashboard() {
  return (
    <>
      <Header />

      <DashboardContainer>
        <DashboardContent>
          {Array.from({ length: 10 }).map((_, i) => {
            return <ProductCard key={i} />
          })}
        </DashboardContent>
      </DashboardContainer>
    </>
  )
}
