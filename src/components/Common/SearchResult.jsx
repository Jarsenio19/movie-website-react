import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSearchParams } from 'react-router'
import { MovieData } from '../../Data/MovieData'

const SearchResult = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  return (
    <section>
      <Header />
      <div className='container'>
        <h3 className=''>SEARCH RESULT FOR: {query} </h3>

        {MovieData.filter((item) { query.toLowerCase() })
          .map((item, index) => (


            <MovieCards
              key={index}
              image={item.image}
              title={item.title}
              isHD={item.isHD}
              isCAM={item.isCAM}

            />
          ))}


      </div>
    </section>
  )


}

export default SearchResult