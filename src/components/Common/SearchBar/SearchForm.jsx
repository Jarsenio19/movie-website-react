import { useState } from 'react'
import { useNavigate } from 'react-router'

const SearchForm = ({ children }) => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${input}`)
  }

  return children({ input, setInput, handleSubmit })
}

export default SearchForm