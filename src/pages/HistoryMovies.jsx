import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import HistoryCard from '../components/Cards/HistoryCard'


const HistoryMovies = () => {
  return (
    <>
      <Header />
      <HistoryCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default HistoryMovies