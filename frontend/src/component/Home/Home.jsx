import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl text-black lg:text-6xl font-bold z-10 py-5'>Quick Bite</p>
                <p className='z-10 text-black text-xl lg:text-4xl'>Skip the Wait, Savor The Taste</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>
        </section>

    </div>
  )
}

export default Home