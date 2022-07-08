import React from 'react';

class Image extends React.Component {
    render() {
      return (
        <img src={this.props.image} alt="logo"></img>
      )
    }
}

export default Image