import React from 'react'
import Header from '../components/Header/Header'
import WatchTopIMDb from '../components/WatchTopIMDb'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

const TopIMDb = () => {
  return (
    <>
      <Header />
      <WatchTopIMDb />
      <Pagination />
      <Footer />
    </>
  )
}

export default TopIMDb