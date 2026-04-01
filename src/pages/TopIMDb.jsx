import Header from '../components/Header/Header'
import WatchTopIMDb from '../components/Cards/WatchTopIMDb'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'

const TopIMDb = () => {
  return (
    <>
      <Header />
      <WatchTopIMDb />
      <Pagination />
      <Footer />
    </>
  )
}

export default TopIMDb