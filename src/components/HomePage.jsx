import React from 'react'
import NavbarPage from './NavbarPage'
import SearchPage from './SearchPage'
import TrendBooksPage from './TrendBooksPage'
import LatestBooks from './LatestBooks'

const HomePage = () => {
  return (
    <div>
        <SearchPage/>
        <TrendBooksPage/>
        <LatestBooks/>
    </div>
  )
}

export default HomePage