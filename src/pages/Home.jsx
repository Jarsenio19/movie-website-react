import Carousel from '../components/Carousel'
import SuggestionCard from '../components/SuggestionCard'
import LatestMoviesCard from '../components/LatestMoviesCard'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <SuggestionCard />
      <LatestMoviesCard />
    </>
  )
}

export default Home
