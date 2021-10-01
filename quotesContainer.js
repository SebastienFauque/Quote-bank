// import React from 'react';
'use strict';

const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }


class AddAllQuotes extends React.Component {
  constructor(props) {
    super(props);
      this.state = { quotes: [] }; //
  }

  componentDidMount() {
    fetch('/quotes')
    .then( data => {
      return data.json(); })
    .then(results => console.log(results))
  }

  render() {
    if (this.props.quotes.length > this.state.quotes.length) {
      const newState = this.props.quotes
      this.state.quotes = this.props.quotes
      return this.state.quotes;
    }

    return e(
      'button',
      { onClick: () => this.setState({ quotes: newState })}
    );
  }
}

const domContainer = document.querySelector('#Quotes_container');
ReactDOM.render(e(AddAllQuotes), domContainer);
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);