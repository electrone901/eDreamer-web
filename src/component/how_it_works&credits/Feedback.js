import React, { Component } from 'react';

class Feedback extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="text-center">
        <iframe
          className="frame-custome"
          title="feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBkcUm2rtgPctPGAOgkWDi4kKRuRIFzk6muj3fJ6ZhnUVwAw/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
            </iframe>
      </div >
    );
  }
}
export default Feedback;
