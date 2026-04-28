import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import LoadingScreen from '../Common/LoadingScreen'

const SportCard = () => {

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

  const sportCard = movies.filter((movie) =>
    movie.genres?.some((genre) =>
      genre.toLowerCase() === "sport"
    )
  )

  // DOUBLE CHECK!!!

  return (
    <main>
      <section className="padding-block-100">
        <div className='container'>
          <h3>ACTION MOVIES</h3>
          <div className="box-wrapper">
            {loading && <LoadingScreen />}

            {error && <p>{error}</p>}


            {sportCard?.map((data, index) => (

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

export default SportCard