import React from 'react'

function Productdetails() {
    return (
        <div className='w-full h-fit  flex flex-col mt-4 sm:flex-row p-4'>
            <div className='sm:w-1/2 w-full  p-2 sm:pr-10 h-1/2   sm:order-1'>
                <div className='w-full  flex justify-center bg-zinc-100  h-full  shadow-2xl '>
                    <img className='sm:w-[30vw] w-full center h-fit object-cover' src="/images/cali.png" alt="" />
                </div>
            </div>
            <div className='sm:w-1/2 w-full flex flex-col    order-1 sm:order-2'>
                <div className='w-full h-fit flex flex-col p-2 mt-1 sm:mt-4   sm:items-start '>
                    <h1 className='font-bold text-xl  sm:text-xl md:text-3xl text-zinc-800'>
                        Reebok Zig Dynamica
                    </h1>
                    <h2 className='text-lg font-semibold mt-2 text-white bg-zinc-700 px-3 italic'>By Nike</h2>
                    <p className='text-md text-zinc-600 mt-1 tighter'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis, accusamus quasi iusto veniam atque.
                    </p>
                    <p className='text-md mt-2 font-semibold text-red-400'>Price</p>
                    <h3 className=' md:text-3xl font-extrabold mt-1  text-xl text-zinc-800'>$199</h3>


                </div>
                <div className='w-1/2 h-fit  flex flex-col items-start p-2 mt-2'>
                    <p className='text-md text-red-400 font-semibold'>Sizes:</p>
                    <div className='mt-2 gap-3 flex w-full h-fit'>
                        <button className='px-3 py-1 bg-zinc-200 rounded-md'>7</button>
                        
                    </div>

                </div>
                <div className='w-1/2 p-2 gap-5 flex mt-4'>
                <button className='px-5 py-3 bg-amber-300 rounded-full font-semibold' >Add to Cart</button>
                <button className='px-5 py-3 bg-orange-400 rounded-full font-semibold' >Buy Now</button>
                </div>
            </div>
            
        </div>
    )
}

export default Productdetails
