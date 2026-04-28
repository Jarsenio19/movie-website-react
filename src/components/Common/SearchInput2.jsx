
import { useState } from 'react';
import './SearchInput2.css'
import { useNavigate } from 'react-router';


const SearchInput2 = () => {

  const [input, setInput] = useState('');
  const navigate = useNavigate()

  return (
    <div className="secondary-bttn">
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate(`/search?q=${input}`)
      }}>
        <input
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
          placeholder="Enter Movies or Series name"
        />

        <button className="button">Search</button>
      </form>
    </div>
  )
}

export default SearchInput2