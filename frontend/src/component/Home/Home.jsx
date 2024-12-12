import React from 'react'
import "./Home.css"
import MICarousel from './MICarousel'
import CanteenCard from '../Canteen/CanteenCard'
import { Canteens } from '../Canteen/CanteenList'

const Home = () => {
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl text-black lg:text-6xl font-bold z-10 py-5 font-script'>Quick Bite</p>
                <p className='z-10 text-black text-xl lg:text-4xl'>Skip the Wait, Savor The Taste</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px-10'>
          <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
          <MICarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
          <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order From Canteens Near You</h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
          {Canteens.map((item, index) => (
            <CanteenCard
              key={index} 
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
          </div>
        </section>

    </div>
  )
}

export default Home