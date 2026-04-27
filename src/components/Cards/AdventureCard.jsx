import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import LoadingScreen from '../Common/LoadingScreen'

const AdventureCard = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    const fetchAPI = async () => {
      try {
        setLoading(true)
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
        setError('Something went wrong while fetching movie.');
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const adventureCard = movies.filter((movie) =>
    movie.genres?.some((genre) =>
      genre.toLowerCase() === "adventure") && movie.genres?.some((genre) =>
        genre.toLowerCase() === "action")
  )

  // DOUBLE CHECK!!!
  return (
    <main>
      <section className="padding-block-100">
        <div className='container'>
          <h3>ADVENTURE & ACTION MOVIES</h3>
          <div className="box-wrapper">
            {loading && <LoadingScreen />}

            {error && <p>{error}</p>}


            {adventureCard?.map((data, index) => (

              <MovieCard
                key={index}
                id={data.id}
                image={data.image}
                title={data.title}
              />

            ))}

          </div>
        </div>
      </section>
    </main>
  )
}

export default AdventureCard