import React from 'react'
import Header from '../components/Header/Header'
import BiographyCard from '../components/Cards/BiographyCard'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'

const BiographyMovies = () => {
  return (
    <>
      <Header />
      <BiographyCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default BiographyMovies