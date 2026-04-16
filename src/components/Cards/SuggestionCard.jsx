import MovieCards from '../Cards/MovieCards'
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'
import { useEffect, useState } from 'react'

const SuggestionCard = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const jsonResponse = await fetch('https://api.imdbapi.dev/titles')
        const result = await jsonResponse.json()
        const buildMovies = result.titles.map((item) => ({
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage.url,
        }))
        setMovies(buildMovies)
      } catch (error) {
        console.log('Handle later', error)
      }
    }
    fetchAPI()
  }, [])


  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>SUGGESTIONS</h3>
        <div className='box-wrapper'>
          {movies?.map((data, index) => (
            <MovieCards
              key={index}
              id={data.id}
              image={data.image}
              title={data.title}
              isHD={data.isHD}
              isCAM={data.isCAM}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuggestionCard