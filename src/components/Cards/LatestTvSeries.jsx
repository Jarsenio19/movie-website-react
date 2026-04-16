import MovieCards from "../Cards/MovieCards"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'

const LatestTvSeries = () => {


  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>LATEST TV SERIES</h3>
        <div className="box-wrapper">
          {MovieData.map((data, index) => (

            <MovieCards
              key={index}
              image={data.image}
              title={data.title}
              isEp={true}
              epNum={data?.ep}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default LatestTvSeries