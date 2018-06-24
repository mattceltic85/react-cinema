import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    console.log('helloooo');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {movie: this.props.movie}
  }

handleChange(e){
  this.setState({
    movie: e.target.value
  });
  }

handleSubmit(e){
  e.preventDefault();
  console.log('handle submit');
  this.props.receiver(this.state.movie);
}

render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        </label>
        <input
          onChange={this.handleChange}
          value={this.props.movie}
          placeholder="Enter movie name"
          autoComplete="city"
        />
        <button>Search Movie!
        </button>
      </form>
    </div>
  );
}
}

export default Search;
