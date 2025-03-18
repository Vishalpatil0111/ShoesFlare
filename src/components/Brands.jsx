import React, { useState, useEffect } from 'react';

function Brands() {
    const shoeBrands = [
        "nike.com",
        "adidas.com",
        "puma.com",
        "reebok.com",
        "asics.com",
        "newbalance.com",
        "underarmour.com",
        "vans.com",
        "converse.com",
        "fila.com",
        "skechers.com",
        "brooksrunning.com",
        "merrell.com",
        "salomon.com",
        "timberland.com",
        "altrarunning.com",
        "hoka.com",
        "lacoste.com"
    ];




    return (

        <div className="w-full mt-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4" >

            {
                shoeBrands.map((brand, index) => (
                    <div key={index} className=" w-full max-w-[140px] border border-gray-300 p-4 shadow-md rounded-lg bg-white mx-auto">
                        <div className="w-full h-20 flex justify-center items-center">
                            <img

                                src={`https://logo.clearbit.com/${brand}`}
                                alt={brand}
                                className="h-16 w-16 object-contain"
                            />
                        </div>
                        <div className="w-full text-center mt-2">
                            <h5 className="text-xs sm:text-sm font-bold text-gray-900 break-words leading-tight">
                                {brand.replace(".com", "")}
                            </h5>
                        </div>



                    </div>
                ))
            }
        </div >

    );
}

export default Brands;
