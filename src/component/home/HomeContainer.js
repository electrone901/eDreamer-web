import React, { Component } from 'react';
import HomeBody from './HomeBody';
import Slider from '../carousel/Slider';

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <Slider />
        <div className="container">
          <HomeBody />
        </div>
      </div>
    );
  }
}
export default HomeContainer;
