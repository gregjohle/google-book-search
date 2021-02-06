import React from "react";
import "./App.css";
import BookSearch from "./components/bookSearch";
import BookFilter from "./components/bookFilter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      resultsPres: false,
      printType: [],
      bookType: [],
      bookView: false,
      error: null,
    };
  }

  url = "https://www.googleapis.com/books/v1/volumes?q=";

  googleSearch(url, term) {
    fetch(url + term)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          books: data,
          resultsPres: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    const results = this.state.resultsPres ? (
      <bookList />
    ) : (
      <div className='noSearch'>
        <h2>Please enter a search term above.</h2>
      </div>
    );

    const error = this.state.error ? (
      <div className='errorState'>{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <div className='bookInput'>
            <BookSearch
              state={this.state}
              getBooks={this.googleSearch}
              fetchURL={this.url}
            />
          </div>
          <div className='filterOptions'>
            <BookFilter />
          </div>
          <div className='results'>
            {results}
            {error}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
