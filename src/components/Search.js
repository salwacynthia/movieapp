import React, { Component, Fragment } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }
  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;

   
    let suggestions = [];
    this.props.handleChange(e.target.value);
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(movie) {
    // CALLING THE PARENT FUNCTION
    this.props.onSuggestionSelected(movie.id);
  }

  renderSuggestions() {
    console.log(this.props.suggestions);
    if (this.props.suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {this.props.suggestions.map(movie => (
          <li onClick={() => this.suggestionSelected(movie)}>{movie.title}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input 
        value={text} 
        onChange={this.onTextChanged}
         type="text" 
         placeholder="Type a keyword"
         style={{ borderRadius:"15px", border:"2px solid #e8335a", padding:"20px", marginTop:"20px"}}
         />
        {this.renderSuggestions()}
      </div>
    );
  }
}


export default Search;
