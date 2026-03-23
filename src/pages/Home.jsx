import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import SuggestionCard from './components/SuggestionCard'
import LatestMoviesCard from './components/LatestMoviesCard'

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <SuggestionCard />
      <LatestMoviesCard />


    </>
  )
}

export default Home