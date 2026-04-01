import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import SuggestionCard from '../components/Cards/SuggestionCard'
import LatestMoviesCard from '../components/Cards/LatestMoviesCard'
import LatestTvSeries from '../components/Cards/LatestTvSeries'
import Footer from '../components//Footer/Footer'


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