import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = function() {
  const { set_searchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    set_searchTerm(searchValue.current.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
            type="text"
            id='name' 
            ref={searchValue} 
            onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
