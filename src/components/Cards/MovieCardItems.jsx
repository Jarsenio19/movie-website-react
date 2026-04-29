import MovieCard from './MovieCard.jsx'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'

const MovieCardItems = ({ movies, error, title }) => {
  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>{title}</h3>
        <div className='box-wrapper'>
          {error && <h1>{error}</h1>}

          {movies?.map((data, index) => (
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
  )
}

export default MovieCardItems
