import React from 'react'
import MovieCards from './MovieCards'

const WatchTopIMDb = () => {
  const watchTopIMDb = [

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
      title: 'The Bride!',
      image: '../../public/Movie-poster/The Bride!.jpg',
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
        <h3>TOP IMDB</h3>
        <div className="box-wrapper">
          {watchTopIMDb.map((detail, index) => (

            <MovieCards
              key={index}
              image={detail.image}
              title={detail.title}
              isHD={detail.isHD}
              isCAM={detail.isCAM}
            // isEp={true}
            // epNum={13}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default WatchTopIMDb