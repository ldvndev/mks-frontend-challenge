import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CartDrawer } from './components/CartDrawer'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

export function Dashboard() {
  return (
    <>
      <Header />
      <CartDrawer />

      <DashboardContainer>
        <DashboardContent>
          {Array.from({ length: 8 }).map((_, i) => {
            return <ProductCard key={i} />
          })}
        </DashboardContent>
      </DashboardContainer>

      <Footer />
    </>
  )
}
