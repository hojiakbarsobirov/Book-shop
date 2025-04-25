import React from 'react'
import NavbarPage from './NavbarPage'
import SearchPage from './SearchPage'
import TrendBooksPage from './TrendBooksPage'

const HomePage = () => {
  return (
    <div>
        <SearchPage/>
        <TrendBooksPage/>
    </div>
  )
}

export default HomePage