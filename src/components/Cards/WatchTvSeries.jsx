import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'


const WatchTvSeries = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const jsonResponse = await fetch('https://api.imdbapi.dev/titles')
        const result = await jsonResponse.json()
        const buildMovies = result.titles.map((item) => ({
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage.url,
          ...item,
        }))
        setMovies(buildMovies)
      } catch (error) {
        console.log('Handle later', error)
      }
    }
    fetchAPI()
  }, [])

  const watchMovies = movies.filter((movie) => movie.type.toLowerCase() === 'tvminiseries' || movie.type.toLowerCase() === 'tvseries')

  return (

    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH TV-SERIES</h3>
        <div className="box-wrapper">
          {watchMovies.map((data, index) => (

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