import React, { Component } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [], // array of movie objects
      searchitem: "",
      totalMovie: 0,
      currentPage: 1,
      currentMovie: null
    };
    // this.apiKey = process.env.APP_API
    this.apiKey = "3ceee2d5133d62eb501632352a3dab7f";
  }

  searchMovies = movieName => {
    if (movieName.length !== 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`
      )
        .then(data => data.json())
        .then(data => {
          console.log("RESULT", data.results);
          this.setState({
            movies: data.results,
            totalMovie: data.totalMovie
          });
        });
    }
  };

  handleChange = query => {
    // QUERY IS A STRING
    console.log("query", query);
    this.searchMovies(query);
    //this.setState({ searchitem: event.target.value });
  };
  // showing selected movie
  movieDetail = movieId => {
    const selectedMovie = this.state.movies.filter(
      movie => movie.id === movieId
    );
    const newcurrentMovie = selectedMovie.length > 0 ? selectedMovie[0] : null; // the selected movie
    this.setState({ currentMovie: newcurrentMovie });
  };
  // returning to previous page
  returnInfo = () => {
    this.setState({ currentMovie: null });
  };
  // Pagination
  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchitem}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        //console.log(data)
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };
  render() {
    const NumofPage = Math.floor(this.state.totalMovie / 20);
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          {this.state.currentMovie === null ? (
            <div>
              {/* <Search/> */}
              <Search
                onSuggestionSelected={this.movieDetail}
                /* items={this.state.movies} */
                suggestions={this.state.movies}
                handleChange={this.handleChange}
              />
              <MovieList
                movieDetail={this.movieDetail}
                movies={this.state.movies}
              />
            </div>
          ) : (
            <MovieDetail
              currentMovie={this.state.currentMovie}
              returnInfo={this.returnInfo}
            />
          )}
          {this.state.totalMovie > 20 && this.state.currentMovie == null ? (
            <Pagination
              pages={NumofPage}
              nextPage={this.nextPage}
              currentPage={this.state.currentPage}
            />
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
}

export default App;



