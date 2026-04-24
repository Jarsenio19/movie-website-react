import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import { MovieData } from '../../Data/MovieData.js'


const RelatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(false)
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
        setError('Something went wrong while fetching movie');
      }
      setLoading(true)
    }
    fetchAPI()
  }, [])

  const relatedMovies = movies.filter((movie) => movie.type.toLowerCase() === 'movie' ?
    movie.type.toLowerCase() === 'tvseries' :
    movie.type.toLowerCase() === 'tvminiseries')


  return (
    <section className="padding-block-100">
      <div className='container-movie-page'>
        <h3>RELATED MOVIES</h3>
        <div className="box-wrapper">
          {error && <p>{error}</p>}

          {relatedMovies.map((data, index) => (

            <MovieCard
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