import React from 'react'
import Header from '../components//Header/Header'
import WatchMovies from '../components/Cards/WatchMovies'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'

const Movies = () => {
  return (
    <>
      <Header />
      <WatchMovies />
      <Pagination />
      <Footer />

    </>
  )
}

export default Movies