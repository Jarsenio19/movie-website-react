import React from 'react'

const LatestTvSeries = () => {

  const suggestionMovies = [
    {
      title: 'GOAT (2026)',
      image: '../../public/Movie-poster/GOAT.jpg',
      isHD: true,
    },
    {
      title: 'Send Help',
      image: '../../public/Movie-poster/SendHelp.jpg',
      isHD: true,
    },
    {
      title: 'Crime 101',
      image: '../../public/Movie-poster/Crime101.jpg',
      isHD: true,
    },
    {
      title: 'Jurassic World: Rebirth',
      image: '../../public/Movie-poster/Jurassic World Rebirth.jpg',
      isHD: true,
    },
    {
      title: 'In the Blink of an Eye',
      image: '../../public/Movie-poster/In the Blink of an Eye.jpg',
      isHD: true,
    },
    {
      title: 'Shelter',
      image: '../../public/Movie-poster/Shelter.jpg',
      isHD: true,
    },
    {
      title: 'Firebreak',
      image: '../../public/Movie-poster/Firebreak.jpg',
      isHD: true,
    },
    {
      title: '28 Years Later: The Bone Temple',
      image: '../../public/Movie-poster/28 Years Later The Bone Temple.jpg',
      isHD: true,
    },
    {
      title: 'Mercy',
      image: '../../public/Movie-poster/Mercy.jpg',
      isHD: true,
    },
    {
      title: 'Hamnet',
      image: '../../public/Movie-poster/Hamnet.jpg',
      isHD: true,
    },
    {
      title: 'The Secret Agent',
      image: '../../public/Movie-poster/The Secret Agent.jpg',
      isHD: true,
    },
    {
      title: 'The Rip',
      image: '../../public/Movie-poster/The Rip.jpg',
      isHD: true,
    },
    {
      title: 'Song Sung Blue',
      image: '../../public/Movie-poster/Song Sung Blue.jpg',
      isHD: true,
    },
    {
      title: 'One Battle After Another',
      image: '../../public/Movie-poster/One Battle After Another.jpg',
      isHD: true,
    },
    {
      title: 'Predator: Badlands',
      image: '../../public/Movie-poster/Predator Badlands.jpg',
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

export default LatestTvSeries