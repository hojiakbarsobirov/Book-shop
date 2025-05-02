import React, { useEffect, useState } from 'react'
import AxiosInstance from '../AxiosInstance'

const LatestBooks = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get('shop-books')
            setData(response.data)
        } catch (err) {
            alert('Error !')
        }
    }

    return (
        <>
            <div className='mt-10 w-full h-auto py-4'>
                <h2 className='font-bold text-gray-500 text-xl pl-6'>Latest Books</h2>
            </div>

            <section className='w-full mt-5 mb-5 px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='w-full max-w-[230px] mx-auto hover:scale-105 transition ease-in-out h-[300px] p-2 rounded-xl bg-white shadow-md'
                        >
                            <img
                                className='w-full h-[80%] object-cover mb-3 rounded-md'
                                src={item.img}
                                alt={item.name}
                            />
                            <div className='w-full flex justify-between items-center px-1'>
                                <h2 className='font-medium text-sm truncate'>{item.name}</h2>
                                <p className='text-green-500 font-semibold text-sm'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default LatestBooks
