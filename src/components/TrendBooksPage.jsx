import React, { useEffect, useState } from 'react'
import AxiosInstance from '../AxiosInstance'

const TrendBooksPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get('trend-books')
            setData(response.data)
        } catch (err) {
            alert("Error !")
        }
    }

    console.log(data)

    return (
        <section className=' w-full h-[50vh] mt-5 flex justify-center items-center overflow-x-scroll gap-10'>
            {data.map((item) => (
                <div className=' w-[230px] hover:scale-105 transition ease-in-out h-[300px] p-2 py-2 rounded-xl'>
                    <img className='w-full h-[80%] mb-5' src={item.img} alt="" />
                    <div className='w-full flex justify-between px-2 '>
                        <h2 className='font-medium'>{item.name}</h2>
                        <p className='text-green-400'>{item.price}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TrendBooksPage
