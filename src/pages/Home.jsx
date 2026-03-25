import Carousel from '../components/Carousel'
import SuggestionCard from '../components/SuggestionCard'
import LatestMoviesCard from '../components/LatestMoviesCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LatestTvSeries from '../components/LatestTvSeries'


const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <SuggestionCard />
      <LatestMoviesCard />
      <LatestTvSeries />
      <Footer />
    </>
  )
}

export default Home