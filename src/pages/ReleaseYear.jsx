import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header/Header'
import MovieCardItems from '../components/Cards/MovieCardItems'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import LoadingScreen from '../components/Common/LoadingScreen'

const ReleaseYear = () => {
  const { year } = useParams()
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

  const filterByYear = movies?.filter((item) => {
    return String(item.startYear) === year
  })
  console.log(filterByYear);


  return (
    <main>
      <div>
        <Header />

        <MovieCardItems
          title={year}
          movies={filterByYear}
          loading={loading}
          error={error}
        />
        <Pagination />
        <Footer />
      </div>
    </main>
  )
}

export default ReleaseYear

