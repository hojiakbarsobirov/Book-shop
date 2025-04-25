import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className='bg-blue-950 w-full px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-3xl text-blue-200'>Books</h2>
                <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                    <div className='w-6 h-0.5 bg-white mb-1'></div>
                    <div className='w-6 h-0.5 bg-white mb-1'></div>
                    <div className='w-6 h-0.5 bg-white'></div>
                </div>
            </div>

            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 text-white font-medium text-sm`}>
                <ul className='flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0'>
                    <li><Link to={'/'}>All Books</Link></li>
                    <li>Trand Books</li>
                    <li>Old Books</li>
                    <li>Historical Books</li>
                    <li>Expensive Books</li>
                    <li><Link to={'/post'}>Post Data</Link></li>
                </ul>

                <div className='mt-3 md:mt-0 md:ml-4'>
                    <select className='bg-transparent text-white border rounded px-2 py-1'>
                        <option className='text-black' value="uz">Uz</option>
                        <option className='text-black' value="ru">Ru</option>
                        <option className='text-black' value="en">En</option>
                    </select>
                </div>
            </div>
        </section>
    )
}

export default NavbarPage
