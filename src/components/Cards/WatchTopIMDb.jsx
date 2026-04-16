import React from 'react'
import MovieCards from './MovieCards'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'


const WatchTopIMDb = () => {

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>TOP IMDB</h3>
        <div className="box-wrapper">
          {MovieData.map((data, index) => (

            <MovieCards
              key={index}
              image={data.image}
              title={data.title}
              isHD={data.isHD}
              isCAM={data.isCAM}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default WatchTopIMDb