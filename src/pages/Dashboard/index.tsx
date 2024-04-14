import { useContext } from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Skeleton } from '../../components/Skeleton'
import { CartDrawerContext } from '../../contexts/CartDrawerContext'
import { CartDrawer } from './components/CartDrawer'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

export function Dashboard() {
  const { result } = useContext(CartDrawerContext)
  const skeletonProductsArray = Array.from({ length: 8 }, (_, i) => i)

  return (
    <>
      <Header />
      <CartDrawer />
      <DashboardContainer>
        <DashboardContent>
          {!result
            ? skeletonProductsArray.map((number) => <Skeleton key={number} />)
            : result.products.map((product) => (
                <ProductCard key={product.id} products={product} />
              ))}
        </DashboardContent>
      </DashboardContainer>
      <Footer />
    </>
  )
}
