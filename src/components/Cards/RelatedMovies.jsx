import React from 'react'
import MovieCards from './MovieCards'
import { MovieData } from '../../Data/MovieData.js'


const RelatedMovies = () => {
  return (
    <section className="padding-block-100">
      <div className='container-movie-page'>
        <h3>RELATED MOVIES</h3>
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

export default RelatedMovies