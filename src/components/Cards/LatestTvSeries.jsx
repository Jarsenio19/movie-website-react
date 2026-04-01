import MovieCards from "../Cards/MovieCards"
import './Cards.css'

const LatestTvSeries = () => {

  const latestSeries = [
    {
      title: 'Invincible - Season 4',
      image: '../../public/Movie-poster/Invincible - Season 4.jpg',
      ep: 31,
    },
    {
      title: 'High Potential - Season 2',
      image: '../../public/Movie-poster/High Potential - Season 2.jpg',
      ep: 12,
    },
    {
      title: 'Daredevil: Born Again - Season 2',
      image: '../../public/Movie-poster/Daredevil Born Again - Season 2.jpg',
      ep: 13,
    },
    {
      title: 'Shrinking - Season 3',
      image: '../../public/Movie-poster/Shrinking - Season 3.jpg',
      ep: 24,
    },
    {
      title: 'Best Medicine - Season 1',
      image: '../../public/Movie-poster/Best Medicine - Season 1.jpg',
      ep: 23,
    },
    {
      title: 'NCIS - Season 23',
      image: '../../public/Movie-poster/NCIS - Season 23.jpg',
      ep: 12,
    },
    {
      title: 'Will Trent - Season 4',
      image: '../../public/Movie-poster/Will Trent - Season 4.jpg',
      ep: 10,
    },
    {
      title: 'NCIS: Origins - Season 2',
      image: '../../public/Movie-poster/NCIS Origins - Season 2.jpg',
      ep: 31,
    },
    {
      title: 'Memory of a Killer - Season 1',
      image: '../../public/Movie-poster/Memory of a Killer - Season 1.jpg',
      ep: 51,
    },
    {
      title: 'St Denis Medical - Season 2',
      image: '../../public/Movie-poster/St Denis Medical - Season 2.jpg',
      ep: 11,
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
      ep: 21,
    },
    {
      title: 'Watson - Season 2',
      image: '../../public/Movie-poster/Watson - Season 2.jpg',
      ep: 41,
    },
    {
      title: 'Rooster - Season 1',
      image: '../../public/Movie-poster/Rooster - Season 1.jpg',
      ep: 21,
    },
  ]

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>LATEST TV SERIES</h3>
        <div className="box-wrapper">
          {latestSeries.map((detail, index) => (

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

export default LatestTvSeries