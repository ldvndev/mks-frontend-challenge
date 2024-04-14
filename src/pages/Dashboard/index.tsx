import { useContext } from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CartDrawerContext } from '../../contexts/CartDrawerContext'
import { CartDrawer } from './components/CartDrawer'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

export function Dashboard() {
  const { result } = useContext(CartDrawerContext)

  return (
    <>
      <Header />
      <CartDrawer />

      <DashboardContainer>
        <DashboardContent>
          {result &&
            result.products.map((product) => {
              return <ProductCard key={product.id} products={product} />
            })}
        </DashboardContent>
      </DashboardContainer>

      <Footer />
    </>
  )
}
