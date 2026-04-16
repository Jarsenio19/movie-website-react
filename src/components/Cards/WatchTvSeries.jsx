import React from 'react'
import MovieCards from './MovieCards'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'


const WatchTvSeries = () => {

  return (

    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH TV-SERIES</h3>
        <div className="box-wrapper">
          {MoveiData.map((data, index) => (

            <MovieCards
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