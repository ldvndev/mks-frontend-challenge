import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../../api/getProduct'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CartDrawer } from './components/CartDrawer'
import { ProductCard } from './components/ProductCard'
import { DashboardContainer, DashboardContent } from './styles'

export function Dashboard() {
  const { data: result } = useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  })

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
