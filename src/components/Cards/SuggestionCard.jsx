import MovieCard from './MovieCard.jsx'
import './Cards.css'
import { useEffect, useState } from 'react'
import Home from '../../pages/Home.jsx'

const SuggestionCard = () => {

  <Home />




  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>SUGGESTIONS</h3>
        <div className='box-wrapper'>
          {error && <h1>{error}</h1>}

          {suggestMovies?.map((data, index) => (
            <MovieCard
              key={index}
              id={data.id}
              image={data.image}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuggestionCard