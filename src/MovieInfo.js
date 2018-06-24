import React from 'react';

class MovieInfo extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(e){
e.preventDefault();
fetch(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=e39b8524`)
.then(function(response){
  console.log(response.json);
  return response.json();
})

}
  render(){
    const movie = this.props.movie || [];

    return(
      <table>
        <tbody>
          <tr>
        <td><a href={`https://www.imdb.com/title/${movie.imdbID}`}>{movie.Title}</a></td>
        <td>{movie.Year}</td>
        <td><img onClick={this.handleClick} src={movie.Poster} /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MovieInfo;
