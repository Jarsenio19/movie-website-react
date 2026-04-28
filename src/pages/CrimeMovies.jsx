import React from 'react'
import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import CrimeCard from '../components/Cards/CrimeCard'

const CrimeMovies = () => {
  return (
    <>
      <Header />
      <CrimeCard />
      <Pagination />
      <Footer />

    </>
  )
}

export default CrimeMovies