import React, { useRef } from 'react'
import AxiosInstance from '../AxiosInstance'

const PostData = () => {

  const imgRef = useRef('')
  const nameRef = useRef('')
  const priceRef = useRef('')

  const createData = async (e) => {
    e.preventDefault()

    const newData = {
      img: imgRef.current.value,
      name: nameRef.current.value,
      price: priceRef.current.value
    }

    try {
      const response = await AxiosInstance.post('trend-books', newData)
    } catch (err) {
      alert('Error !')
    }
  }

  return (
    <section className='bg-gray-100 w-full h-screen flex justify-center items-center'>
      <div className='bg-white w-[350px] h-[400px] shadow-lg rounded-md'>
        <form onSubmit={createData} className='w-full h-full flex justify-around items-center flex-col p-2'>
          <input ref={imgRef} className='border border-gray-300 w-full h-12 rounded pl-4' type="text" placeholder='image URL' />
          <input ref={nameRef} className='border border-gray-300 w-full h-12 rounded pl-4' type="text" placeholder='name' />
          <input ref={priceRef} className='border border-gray-300 w-full h-12 rounded pl-4' type="text" placeholder='price' />

          <button type='submit' className='bg-blue-500 w-full h-11 text-white font-medium text-lg rounded-md'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default PostData
