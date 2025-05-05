import React, { useEffect, useState } from 'react'
import AxiosInstance from '../AxiosInstance'
import SinglePage from './SinglePage'

const TrendBooksPage = () => {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const getData = async () => {
    const res = await fetch('https://673e05870118dbfe8609d01b.mockapi.io/trend-books')
    const result = await res.json()
    setData(result)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleOpenModal = (id) => {
    setSelectedId(id)
    setModal(true)
  }

  return (
    <>
      <div className='w-full h-auto py-4'>
        <h2 className='font-bold text-xl text-gray-500 pl-5'>Trend Books</h2>
      </div>

      <section className='w-full mt-5 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {data.map((item) => (
            <div
              onClick={() => handleOpenModal(item.id)}
              key={item.id}
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

      {modal && <SinglePage id={selectedId} setModal={setModal} />}
    </>
  )
}

export default TrendBooksPage
