import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoadingScreen from '../Common/LoadingScreen'
import { useSearchParams } from 'react-router'
import MovieCard from '../Cards/MovieCard'

const SearchResult = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true)
        const jsonResponse = await fetch('https://api.imdbapi.dev/titles')
        console.log('JSON RESPONSE', jsonResponse)
        const result = await jsonResponse.json()
        const buildMovies = result.titles.map((item) => ({
          title: item.primaryTitle,
          image: item.primaryImage.url,
          ...item,
        }))
        setMovies(buildMovies)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const searchResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  )


  return (
    <>
      <main>
        <section className='padding-block-100'>
          <Header />
          <div className='container'>
            <h3 className=''>SEARCH RESULT FOR: {query} </h3>
            <div className='box-wrapper'>
              {loading && <LoadingScreen />}
              {error && <h1>{error}</h1>}

              {searchResults.map(
                ({ image, title, isHD, isCAM, isEp, epNum }, index) => (
                  <MovieCard
                    key={index}
                    image={image}
                    title={title}
                    isHD={isHD}

                  />
                ),
              )}
            </div>
          </div>
        </section >
      </main>
      <Footer />


    </>
  )
}

export default SearchResult
