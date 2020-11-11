import React, { Component } from 'react';
import FoodItem from './FoodItem.js';
import PropTypes from 'prop-types';

export class Foods extends Component {
  static propTypes = {
    foods: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
        {this.props.foods.map((food, index) => (
          <FoodItem key={index} food={food} />
        ))}
      </div>
    );
  }
}

export default Foods;
