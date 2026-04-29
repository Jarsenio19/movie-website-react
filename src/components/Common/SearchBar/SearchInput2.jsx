
import { useState } from 'react';
import './SearchInput2.css'
import { useNavigate } from 'react-router';
import SearchForm from './SearchForm';


const SearchInput2 = () => {


  return (
    <SearchForm>
      {({ input, setInput, handleSubmit }) => (

        <div className="secondary-bttn">
          <form onSubmit={handleSubmit} className="secondary-bttn">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter Movies or Series name"
            />
            <button className="button4">Search</button>
          </form>
        </div>
      )}

    </SearchForm>
  )
}

export default SearchInput2