import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSearchParams } from 'react-router'
import { MovieData } from '../../Data/MovieData'
import MovieCards from '../Cards/MovieCards'

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
    <section>
      <Header />
      <div className='container'>
        <h3 className=''>SEARCH RESULT FOR: {query} </h3>
        <div className='box-wrapper'>
          {loading && <h1>LOADING.....</h1>}
          {error && <h1>{error}</h1>}

          {searchResults.map(
            ({ image, title, isHD, isCAM, isEp, epNum }, index) => (
              <MovieCards
                key={index}
                image={image}
                title={title}
                isHD={isHD}
                isCAM={isCAM}
                isEp={isEp}
                epNum={epNum}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchResult
