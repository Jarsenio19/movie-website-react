import MovieCards from "../components/MovieCards"

const LatestTvSeries = () => {

  const latestSeries = [
    {
      title: 'Invincible - Season 4',
      image: '../../public/Movie-poster/Invincible - Season 4.jpg',
      isHD: true,
    },
    {
      title: 'High Potential - Season 2',
      image: '../../public/Movie-poster/High Potential - Season 2.jpg',
      isHD: true,
    },
    {
      title: 'Daredevil: Born Again - Season 2',
      image: '../../public/Movie-poster/Daredevil Born Again - Season 2.jpg',
      isHD: true,
    },
    {
      title: 'Shrinking - Season 3',
      image: '../../public/Movie-poster/Shrinking - Season 3.jpg',
      isHD: true,
    },
    {
      title: 'Best Medicine - Season 1',
      image: '../../public/Movie-poster/Best Medicine - Season 1.jpg',
      isHD: true,
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
              isHD={detail.isHD}
            // // isCAM={detail.isCAM}
            // isEp={true}
            // epNum={13}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default LatestTvSeries