import React from 'react'
import Header from '../components/Header/Header'
import Filmbox from '../components/Filmbox'
import RelatedMovies from '../components/RelatedMovies'
import Footer from '../components/Footer'

const Film = () => {
  return (
    <>
      <Header />
      <Filmbox />
      <RelatedMovies />
      <Footer />
    </>
  )
}

export default Film