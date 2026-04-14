import React from 'react'
import Header from '../components/Header/Header'
import { useSearchParams } from 'react-router'

const SearchResult = () => {
  const [searchParams] = useSearchParams()
  const queryyyyy = searchParams.get('q')
  return (
    <div>
      <Header />
      HERE IS THE QUERY: {queryyyyy}
    </div>
  )
}

export default SearchResult