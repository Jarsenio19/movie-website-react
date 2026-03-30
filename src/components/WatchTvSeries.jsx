import React from 'react'
import MovieCards from './MovieCards'

const WatchTvSeries = () => {
  const watchTvSeries = [
    {
      title: 'Invincible - Season 4',
      image: '../../public/Movie-poster/Invincible - Season 4.jpg',
      isHD: true,
      ep: 1,
    },
    {
      title: 'High Potential - Season 2',
      image: '../../public/Movie-poster/High Potential - Season 2.jpg',
      isHD: true,
      ep: 2,
    },
    {
      title: 'Daredevil: Born Again - Season 2',
      image: '../../public/Movie-poster/Daredevil Born Again - Season 2.jpg',
      isHD: true,
      ep: 3,
    },
    {
      title: 'Shrinking - Season 3',
      image: '../../public/Movie-poster/Shrinking - Season 3.jpg',
      isHD: true,
      ep: 4,
    },
    {
      title: 'Best Medicine - Season 1',
      image: '../../public/Movie-poster/Best Medicine - Season 1.jpg',
      isHD: true,
      ep: 5,
    },
    {
      title: 'NCIS - Season 23',
      image: '../../public/Movie-poster/NCIS - Season 23.jpg',
      isHD: true,
    },
    {
      title: 'Will Trent - Season 4',
      image: '../../public/Movie-poster/Will Trent - Season 4.jpg',
      isHD: true,
    },
    {
      title: 'NCIS: Origins - Season 2',
      image: '../../public/Movie-poster/NCIS Origins - Season 2.jpg',
      isHD: true,
    },
    {
      title: 'Memory of a Killer - Season 1',
      image: '../../public/Movie-poster/Memory of a Killer - Season 1.jpg',
      isHD: true,
    },
    {
      title: 'St Denis Medical - Season 2',
      image: '../../public/Movie-poster/St Denis Medical - Season 2.jpg',
      isHD: true,
    },
    {
      title: 'CIA - Season 1',
      image: '../../public/Movie-poster/CIA - Season 1.jpg',
      isHD: true,
    },
    {
      title: 'The Rookie - Season 8',
      image: '../../public/Movie-poster/The Rookie - Season 8.jpg',
      isHD: true,
    },
    {
      title: 'FBI - Season 8',
      image: '../../public/Movie-poster/FBI - Season 8.jpg',
      isHD: true,
    },
    {
      title: 'Watson - Season 2',
      image: '../../public/Movie-poster/Watson - Season 2.jpg',
      isHD: true,
    },
    {
      title: 'Rooster - Season 1',
      image: '../../public/Movie-poster/Rooster - Season 1.jpg',
      isHD: true,
    },

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
      image:
        '../../public/Movie-poster/The Rise of the Red Hot Chili Peppers Our Brother, Hillel.jpg',
      isHD: true,
    },
  ]
  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>WATCH TV-SERIES</h3>
        <div className='box-wrapper'>
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