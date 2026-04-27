import MovieCard from "./MovieCard.jsx"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'
import { useEffect, useState } from "react"
import LoadingScreen from "../Common/LoadingScreen.jsx"


const WatchMovies = () => {
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



  const watchMovies = movies.filter((movie) => movie.type.toLowerCase() === 'movie')

  return (
    <main>
      <section className="padding-block-100">
        <div className='container'>
          <h3>WATCH MOVIES</h3>
          <div className="box-wrapper">
            {loading && <LoadingScreen />}

            {error && <p>{error}</p>}

            {watchMovies.map((data, index) => (

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
    </main>
  )
}

export default WatchMovies