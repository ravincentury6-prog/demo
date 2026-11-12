import React from 'react'
import Image from 'next/image'

function CraftPage() {
  return (
  <section className='absolute w-full h-screen '>
    <Image 
    src="/assets/craft/craft.png"
    alt='Comfort page images'
    width={500}
    height={500}
    priority
    className='w-[100%] bg-cover bg-center sm:h-[500px] lg:h-[700px]'
    />


    {/*Tittle and descritons*/}
    <div className=' absolute inset-0 pointer-events-none'>
    <div className=' relative z-10 flex flex-col items-start justify-center px-16'>
    <h1 className='font-moulin text-3xl font-light tracking-tight text-[#f8f1e7]  mt-85'>More Than Just a Homestay</h1>
    <p className=' font-neptune text-[#f8f1e7] text-sm leading-relaxed mt-5 max-w-[600px]'>A window into a way to life where human and more-than-human world
      <br />
    coexist responsibility is shared while relieving individual burden, and
    <br />
    selfhood is understood thround and care for others.Harmany is sought without
    <br />
    denying moments of discord,and rules are respected while allowing space
    <br />
    for disobedience-so the community can adapt and endure. 
    </p>
    </div>

    {/*arrow*/}

    <button className=' absolute left-4 top-1/2 -translate-y-1/2 p-1 hover:scale-110 translate duration-200'>
    <img src="/assets/buttons/left.png" alt="Previous" className='w-5 h-5' />
    </button>


    <button className=' absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:scale-110 translate duration-200'>
    <img src="/assets/buttons/right.png" alt="Previous" className='w-5 h-5' />
    </button>
    </div>
  </section>
  )
}
export default CraftPage;