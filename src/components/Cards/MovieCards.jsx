import '../Hero/Hero.css'
import { Link } from "react-router"
import './Cards.css'


const MovieCards = ({ image, title, isHD, isCAM, isEp, epNum }) => {
  return (
    <a>
      <div className='box-container'>
        <div className='box'>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        {isHD && <div className="badge">HD</div>}
        {isCAM && <div className="badge">CAM</div>}
        {isEp && <div className="badge1">EP {epNum} </div>}

        <Link to='/film'><div className="overlay">
          <div className="play-bttn">&#9658;</div>
          <h3 className="title">{title}</h3>
        </div></Link>
      </div>
    </a>
  )
}

export default MovieCards