import MovieCard from "./MovieCard.jsx"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'
import { useEffect, useState } from "react"


const LatestTvSeries = () => {


  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>LATEST TV SERIES</h3>
        <div className="box-wrapper">

          {findSeries?.map((data, index) => (
            <MovieCard
              key={index}
              id={data.id}
              image={data.image}
              title={data.title}
            // isHD={data.isHD}
            // isCAM={data.isCAM}

            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default LatestTvSeries