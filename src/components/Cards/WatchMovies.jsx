import MovieCard from "./MovieCard.jsx"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'
import { useEffect, useState } from "react"


const WatchMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      try {
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
        console.log('Handle Later', error);
      }
    }
    fetchAPI()
  }, [])

  const watchMovies = movies.filter((movie) => movie.type.toLowerCase() === 'movie')

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH MOVIES</h3>
        <div className="box-wrapper">
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
  )
}

export default WatchMovies