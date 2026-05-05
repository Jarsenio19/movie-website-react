import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header/Header'
import MovieCardItems from '../components/Cards/MovieCardItems'
import Footer from '../components/Footer/Footer'
import Pagination from '../components/Pagination/Pagination'

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

  const filterByGenre = movies?.filter((item) => {
    const genres = item.genres?.map((item) => item.toLowerCase()) ?? []

    const paramGenres = genreFromParams?.toLowerCase().split('-') ?? []

    return paramGenres.every((item) => genres.includes(item))
  })

  const upperCaseGenre = genreFromParams?.split('-').map(item => item.toUpperCase()).join(' ');

  return (
    <main>
      <div>
        <Header />
        <MovieCardItems
          title={upperCaseGenre}
          movies={filterByGenre}
          loading={loading}
          error={error} />
        <Pagination />
        <Footer />
      </div>
    </main>
  )
}

export default Genre
