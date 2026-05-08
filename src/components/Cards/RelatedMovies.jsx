import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import LoadingScreen from '../Common/LoadingScreen.jsx'
import { useParams } from 'react-router'

const RelatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { id: idFromParams } = useParams()

  const getRelatedMoviesFromGenre = (moviesData, movieSelected) => {
    const genreOfMovieSelected = movieSelected.genres

    const filtered = moviesData.filter((item) => {
      const genreFromItem = item.genres
      return genreOfMovieSelected.some((selectedGenre) =>
        genreFromItem.includes(selectedGenre),
      )
    })

    return filtered
  }

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch('https://api.imdbapi.dev/titles')

        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const result = await response.json()
        const moviesData = result.titles.map((item) => ({
          ...item,
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage?.url || '',
        }))

        const movieSelected = moviesData.find(
          (item) => item.id === idFromParams,
        )

        const allRelatedMovies = getRelatedMoviesFromGenre(
          moviesData,
          movieSelected,
        )

        setMovies(allRelatedMovies)
      } catch (error) {
        console.error(error)
        setError('Something went wrong while fetching movies.')
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>RELATED MOVIES</h3>

        {loading && <LoadingScreen />}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className='box-wrapper'>
            {movies.length > 0 ? (
              movies
                .slice(0, 6)
                .map((data) => (
                  <MovieCard
                    key={data.id}
                    id={data.id}
                    image={data.image}
                    title={data.title}
                  />
                ))
            ) : (
              <p>No related movies found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default RelatedMovies