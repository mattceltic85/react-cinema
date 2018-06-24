import React from 'react';
import Header from './header';
import Search from './search';
import Query from './query';
import MovieInfo from './movieInfo';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      movieRows: [],
      movie: ""
    };

    this.receiver = this.receiver.bind(this);

  }

  receiver(movie){
    this.setState({movie});
    fetch(
      `http://www.omdbapi.com/?apikey=e39b8524&type=movie&s=${movie}`
    )
    .then(function(response){
      return response.json();
    })
    .then(data=> {
      var movieRows = []
      data.Search.forEach((movie,index)=>{
        const movieRow = <MovieInfo key={index} movie={movie}/>
        movieRows.push(movieRow);
      })
      this.setState({movieRows: movieRows})

    })
    .catch(function(error){
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <Header />
        <Search receiver={this.receiver}/>
        {this.state.movieRows}
        <Query />
      </div>
    )
  }
}

export default App;
