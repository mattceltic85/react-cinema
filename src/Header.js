import React from 'react';

class Header extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <table>
        <tbody>
          <tr>
        <td >Movie Search Database</td>
        <td>Image</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Header;
