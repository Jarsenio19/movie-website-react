import React from 'react'
import MovieCards from './MovieCards'
import './Cards.css'

const WatchTvSeries = () => {
  const watchTvSeries = [
    {
      title: 'Invincible - Season 4',
      image: '../../public/Movie-poster/Invincible - Season 4.jpg',
      ep: 34,
    },
    {
      title: 'High Potential - Season 2',
      image: '../../public/Movie-poster/High Potential - Season 2.jpg',
      ep: 14,
    },
    {
      title: 'Daredevil: Born Again - Season 2',
      image: '../../public/Movie-poster/Daredevil Born Again - Season 2.jpg',
      ep: 14,
    },
    {
      title: 'Shrinking - Season 3',
      image: '../../public/Movie-poster/Shrinking - Season 3.jpg',
      ep: 1,
    },
    {
      title: 'Best Medicine - Season 1',
      image: '../../public/Movie-poster/Best Medicine - Season 1.jpg',
      ep: 12,
    },
    {
      title: 'NCIS - Season 23',
      image: '../../public/Movie-poster/NCIS - Season 23.jpg',
      ep: 15,
    },
    {
      title: 'Will Trent - Season 4',
      image: '../../public/Movie-poster/Will Trent - Season 4.jpg',
      ep: 23,
    },
    {
      title: 'NCIS: Origins - Season 2',
      image: '../../public/Movie-poster/NCIS Origins - Season 2.jpg',
      ep: 25,
    },
    {
      title: 'Memory of a Killer - Season 1',
      image: '../../public/Movie-poster/Memory of a Killer - Season 1.jpg',
      ep: 32,
    },
    {
      title: 'St Denis Medical - Season 2',
      image: '../../public/Movie-poster/St Denis Medical - Season 2.jpg',
      ep: 1,
    },
    {
      title: 'CIA - Season 1',
      image: '../../public/Movie-poster/CIA - Season 1.jpg',
      ep: 12,
    },
    {
      title: 'The Rookie - Season 8',
      image: '../../public/Movie-poster/The Rookie - Season 8.jpg',
      ep: 15,
    },
    {
      title: 'FBI - Season 8',
      image: '../../public/Movie-poster/FBI - Season 8.jpg',
      ep: 43,
    },
    {
      title: 'Watson - Season 2',
      image: '../../public/Movie-poster/Watson - Season 2.jpg',
      ep: 22,
    },
    {
      title: 'Rooster - Season 1',
      image: '../../public/Movie-poster/Rooster - Season 1.jpg',
      ep: 2,
    },

    {
      title: 'King Ivory',
      image: '../../public/Movie-poster/King Ivory.jpg',
      ep: 32,
    },
    {
      title: 'How to Make a Killing',
      image: '../../public/Movie-poster/How to Make a Killing.jpg',
      ep: 24,
    },
    {
      title: 'No Choice',
      image: '../../public/Movie-poster/No Choice.jpg',
      ep: 12,
    },
    {
      title: 'I Can Only Imagine 2',
      image: '../../public/Movie-poster/I Can Only Imagine 2.jpg',
      ep: 10,
    },
    {
      title: 'GOAT',
      image: '../../public/Movie-poster/GOAT.jpg',
      ep: 24,
    },
    {
      title: 'Magellan',
      image: '../../public/Movie-poster/Magellan.jpg',
      ep: 22,
    },
    {
      title: 'The Tai Chi Master',
      image: '../../public/Movie-poster/The Tai Chi Master.jpg',
      ep: 18,
    },
    {
      title: 'Send Help',
      image: '../../public/Movie-poster/SendHelp.jpg',
      ep: 19,
    },
    {
      title: 'The Dresden Sun',
      image: '../../public/Movie-poster/The Dresden Sun.jpg',
      ep: 22,
    },
    {
      title: 'I Killed Him in My Sleep',
      image: '../../public/Movie-poster/I Killed Him in My Sleep.jpg',
      ep: 23,
    },
    {
      title: 'Project Hail Mary',
      image: '../../public/Movie-poster/Project Hail Mary.jpg',
      ep: 1,
    },
    {
      title: 'By Design',
      image: '../../public/Movie-poster/By Design.jpg',
      ep: 32,
    },
    {
      title: 'The Love That Remains',
      image: '../../public/Movie-poster/The Love That Remains.jpg',
      ep: 5,
    },
    {
      title: 'Dream Story',
      image: '../../public/Movie-poster/Dream Story.jpg',
      ep: 7,
    },
    {
      title: 'The Rise of the Red Hot Chili Peppers: Our Brother, Hillel',
      image: '../../public/Movie-poster/The Rise of the Red Hot Chili Peppers Our Brother, Hillel.jpg',
      ep: 1,
    },
  ]
  return (

    <section className="padding-block-100">
      <div className='container'>
        <h3>WATCH TV-SERIES</h3>
        <div className="box-wrapper">
          {watchTvSeries.map((detail, index) => (

            <MovieCards
              key={index}
              image={detail.image}
              title={detail.title}
              isEp={true}
              epNum={detail?.ep}
            />

          ))}

        </div>
      </div>
    </section>

  )
}

export default WatchTvSeries