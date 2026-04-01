import React from 'react'
import Header from '../components/Header/Header'
import WatchTvSeries from '../components/Cards/WatchTvSeries'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components//Footer/Footer'

const TvSeries = () => {
  return (
    <>
      <Header />
      <WatchTvSeries />
      <Pagination />
      <Footer />

    </>
  )
}

export default TvSeries