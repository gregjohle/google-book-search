import React from "react";

class BookSearch extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const term = e.target.value;

    this.props.getBooks(this.props.fetchURL, term);
  }

  render() {
    return (
      <form className='bookSearch'>
        <label for='bookSearchInput'>
          Search:
          <input
            type='text'
            name='bookSearchInput'
            placeholder='Enter a search term here...'
          />
          <button type='submit'>SEARCH</button>
        </label>
      </form>
    );
  }
}

export default BookSearch;
