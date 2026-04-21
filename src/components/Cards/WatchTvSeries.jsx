import React from 'react'
import MovieCard from './MovieCard.jsx'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'


const WatchTvSeries = () => {

  return (

    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH TV-SERIES</h3>
        <div className="box-wrapper">
          {MovieData.map((data, index) => (

            <MovieCard
              key={index}
              image={data.image}
              title={data.title}
              isEp={true}
              epNum={data?.ep}
            />

          ))}

        </div>
      </div>
    </section>

  )
}

export default WatchTvSeries