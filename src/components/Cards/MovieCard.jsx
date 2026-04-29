import '../Hero/Hero.css'
import { Link } from 'react-router'
import './Cards.css'

const MovieCard = ({ id, image, title, isHD, isCAM, isEp, epNum }) => {
  // TEST
  return (
    <Link to={`/film/${id}`}>
      <div className='box-container'>
        <div className='box'>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        {isHD && <div className='badge'>HD</div>}
        {isCAM && <div className='badge'>CAM</div>}
        {isEp && <div className='badge1'>EP {epNum} </div>}

        <div className='overlay'>
          <div className='play-bttn'>&#9658;</div>
          <h3 className='title'>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard