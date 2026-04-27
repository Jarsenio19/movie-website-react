import React from 'react'
import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import ComedyCard from '../components/Cards/ComedyCard'

const ComedyMovies = () => {
  return (
    <>
      <Header />
      <ComedyCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default ComedyMovies