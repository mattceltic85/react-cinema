import React from 'react';

class Query extends React.Component{
  constructor(props){
    super();
    this.state = {
      movieArray: [],
      movie: ""
    };

this.receiver = this.receiver.bind(this);

}

receiver(movie){
  console.log(movie);
}

render(){
  return (
    <div>
    </div>
  );
}
}

export default Query;
