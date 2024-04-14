import { useContext } from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Skeleton } from '../../components/Skeleton'
import { CartDrawerContext } from '../../contexts/CartDrawerContext'
import { CartDrawer } from './components/CartDrawer'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

const skeletonProductsArray = Array.from({ length: 8 }, (_, i) => i)

export function Dashboard() {
  const { result } = useContext(CartDrawerContext)

  return (
    <>
      <Header />
      <CartDrawer />
      <DashboardContainer>
        <DashboardContent>
          {!result
            ? skeletonProductsArray.map((number) => <Skeleton key={number} />)
            : result &&
              result.products.map((product) => {
                return <ProductCard key={product.id} products={product} />
              })}
        </DashboardContent>
      </DashboardContainer>
      <Footer />
    </>
  )
}
