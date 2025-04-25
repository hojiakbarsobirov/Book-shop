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
                <div className='border-2 border-dashed w-[200px] h-[260px] border-black p-2 py-2 rounded-lg'>
                    <img className='w-full h-[80%]' src={item.img} alt="" />
                    <div className='w-full flex justify-between '>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TrendBooksPage
