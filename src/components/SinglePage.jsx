import React, { useEffect, useState } from 'react'

const SinglePage = ({ id, setModal }) => {
  const [data, setData] = useState(null)

  const getData = async () => {
    const res = await fetch('https://673e05870118dbfe8609d01b.mockapi.io/trend-books')
    const result = await res.json()
    const item = result.find((d) => d.id === id)
    setData(item)
  }

  useEffect(() => {
    getData()
  }, [id])

  if (!data) return <div className="text-center mt-10 text-gray-500">Yuklanmoqda...</div>

  return (
    <section className='fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-2 sm:px-4'>
      <div className='relative bg-white w-full max-w-[90%] sm:max-w-[85%] md:max-w-[700px] lg:max-w-[600px] xl:max-w-[550px] rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[380px] sm:min-h-[400px]'>

        {/* Close Button - MOBILE (absolute) */}
        <button
          onClick={() => setModal(false)}
          className='block md:hidden absolute top-3 right-3 z-10'
        >
          <img src="/close-icons.png" alt="close" className="w-6 h-6" />
        </button>

        {/* Image section */}
        <div className='w-full md:w-1/2 h-60 sm:h-64 md:h-auto'>
          <img
            src={data.img}
            alt={data.name}
            className='w-full h-full p-2 object-cover'
          />
        </div>

        {/* Info section */}
        <div className='w-full md:w-1/2 p-4 flex flex-col justify-between'>
          <div className='hidden md:flex justify-between items-start mb-2'>
            <h2 className='text-lg font-bold text-gray-800'>{data.name}</h2>
            {/* Close Button - DESKTOP */}
            <button
              onClick={() => setModal(false)}
              className='text-gray-500 hover:text-red-500 transition'
            >
              <img src="/close-icons.png" alt="close" className="w-6 h-6" />
            </button>
          </div>

          <p className='text-green-600 font-semibold text-base mb-2'>{data.price}</p>

          <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
            {data.desc || "Kitob haqida qisqacha ma'lumot mavjud emas."}
          </p>

          <button onClick={() => setModal(false)} className='w-full h-10 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition'>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default SinglePage
