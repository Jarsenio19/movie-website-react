import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import SuggestionCard from '../components/Cards/SuggestionCard'
import LatestMoviesCard from '../components/Cards/LatestMoviesCard'
import LatestTvSeries from '../components/Cards/LatestTvSeries'
import Footer from '../components//Footer/Footer'
import { useEffect, useState } from 'react'


const Home = () => {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    const fetchAPI = async () => {
      try {
        setLoading(true)
        const jsonResponse = await fetch('https://api.imdbapi.dev/titles')
        const result = await jsonResponse.json()
        const buildMovies = result.titles.map((item) => ({
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage.url,
          ...item,
        }))
        setMovies(buildMovies)
      } catch (error) {
        setError('Something went wrong while fetching movie.');
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])



  // DOUBLE CHECK!!!
  return (
    <>
      <Header />
      <Carousel />
      <SuggestionsCard movies={movies} />
      <LatestMoviesCard />
      <LatestTvSeries />
      <Footer />
    </>
  )
}

export default Home