import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header/Header'
import MovieCardItems from '../components/Cards/MovieCardItems'

const Genre = () => {
  const { genre: genreFromParams } = useParams()
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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

        setMovies(moviesData)
      } catch (error) {
        console.error(error)
        setError('Something went wrong while fetching movies.')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  console.log(movies)
  const filterByGenre = movies?.filter((item) => {
    const genres = item.genres?.map((genre) => genre.toLowerCase()) ?? []

    if (genreFromParams === 'adventure-action') {
      return genres.includes('adventure') && genres.includes('action')
    }

    return genres.includes(genreFromParams)
  })
  console.log('filterByGenre', filterByGenre)

  return (
    <div>
      <Header />
      <div>Filtered by genre: {genreFromParams}</div>
      <MovieCardItems title='GENRE' movies={filterByGenre} loading={loading} error={error} />
    </div>
  )
}

export default Genre
