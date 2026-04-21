import MovieCard from "./MovieCard.jsx"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'


const WatchMovies = () => {

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH MOVIES</h3>
        <div className="box-wrapper">
          {MovieData.map((data, index) => (

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