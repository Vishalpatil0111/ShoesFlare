import React from 'react'
import Brands from './Brands'

function Brand() {
    return (
        <div className='w-full py-28 px-10 text-center '>
            <h1 className='mb-10 font-bold text-xl md:text-3xl '>Our Featured Brands</h1>
            <Brands />
        </div>
    )
}

export default Brand
