import Landing from '@/components/Landing'
import Image from 'next/image'
import TabSection from '@/components/TabSection'

import getCategories from '@/utils/getCategories'
import getProducts from '@/utils/getProducts'

import Product from '@/components/Product'
import Basket from '@/components/Basket'

export default async function Home() {

  const categories = await getCategories()
  const products = await getProducts()
  // console.log(products[0].image)

  return (
    <>
      <main className='relative h-[220vh] bg-[#E7ECEE]'>
        <Landing />
        <Basket/>
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            New Promos
          </h1>
          <TabSection categories={categories} products={products}/>
        </div>
      </section>
    </>
  )
}
