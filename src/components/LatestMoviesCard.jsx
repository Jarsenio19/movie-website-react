import React from 'react'

const LatestMoviesCard = () => {

  const suggestionMovies = [
    {
      title: 'King Ivory',
      image: '../../public/Movie-poster/King Ivory.jpg',
      isHD: true,
    },
    {
      title: 'How to Make a Killing',
      image: '../../public/Movie-poster/How to Make a Killing.jpg',
      isHD: true,
    },
    {
      title: 'No Choice',
      image: '../../public/Movie-poster/No Choice.jpg',
      isHD: true,
    },
    {
      title: 'I Can Only Imagine 2',
      image: '../../public/Movie-poster/I Can Only Imagine 2.jpg',
      isHD: true,
    },
    {
      title: 'GOAT',
      image: '../../public/Movie-poster/GOAT.jpg',
      isHD: true,
    },
    {
      title: 'Magellan',
      image: '../../public/Movie-poster/Magellan.jpg',
      isHD: true,
    },
    {
      title: 'The Tai Chi Master',
      image: '../../public/Movie-poster/The Tai Chi Master.jpg',
      isHD: true,
    },
    {
      title: 'Send Help',
      image: '../../public/Movie-poster/SendHelp.jpg',
      isHD: true,
    },
    {
      title: 'The Dresden Sun',
      image: '../../public/Movie-poster/The Dresden Sun.jpg',
      isHD: true,
    },
    {
      title: 'I Killed Him in My Sleep',
      image: '../../public/Movie-poster/I Killed Him in My Sleep.jpg',
      isHD: true,
    },
    {
      title: 'Project Hail Mary',
      image: '../../public/Movie-poster/Project Hail Mary.jpg',
      isHD: true,
    },
    {
      title: 'By Design',
      image: '../../public/Movie-poster/By Design.jpg',
      isHD: true,
    },
    {
      title: 'The Love That Remains',
      image: '../../public/Movie-poster/The Love That Remains.jpg',
      isHD: true,
    },
    {
      title: 'Dream Story',
      image: '../../public/Movie-poster/Dream Story.jpg',
      isHD: true,
    },
    {
      title: 'The Rise of the Red Hot Chili Peppers: Our Brother, Hillel',
      image: '../../public/Movie-poster/The Rise of the Red Hot Chili Peppers Our Brother, Hillel.jpg',
      isHD: true,
    },

  ]

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>SUGGESTIONS</h3>
        <div className="box-wrapper">
          {suggestionMovies.map((detail, index) => (
            <a key={index}>
              <div className='box-container'>
                <div className='box'>
                  <img src={detail.image} alt="" />
                  <h3>{detail.title}</h3>
                </div>
                {detail.isHD && <div className="badge">HD</div>}
                <div className="overlay">
                  <div className="play-bttn">&#9658;</div>
                  <h3 className="title">{detail.title}</h3>
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  )
}

export default LatestMoviesCard