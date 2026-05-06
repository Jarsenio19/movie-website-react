import './SearchInput.css'
import { IoSearchOutline } from "react-icons/io5";
import SearchForm from './SearchForm'

const SearchInput = () => {
  return (
    <SearchForm>
      {({ input, setInput, handleSubmit }) => (
        <div className="primary-bttn">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="display-sm-none display-md-inline-flex"
              type="text"
              placeholder="Search.."
            />
            <button className="button display-sm-none display-md-inline-flex">
              <IoSearchOutline />
            </button>
          </form>
        </div>
      )}
    </SearchForm>
  )
}

export default SearchInput