import './SearchInput.css'

import { useState } from 'react'
import { useNavigate } from 'react-router'


const SearchInput = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate()

  return (
    <div className="primary-bttn">
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate(`/search?q=${input}`)
      }}>
        <input
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
          className="display-sm-none display-md-inline-flex"
          type="text"
          placeholder="Search.."
        />
      </form>
      <button className="button display-sm-none display-md-inline-flex">
        <img src="../../public/search.png" alt="" />
      </button>
    </div>
  )
}

export default SearchInput