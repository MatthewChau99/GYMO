import React, { Component } from 'react';
import FoodItem from './FoodItem.js';
import PropTypes from 'prop-types';

export class Foods extends Component {
  static propTypes = {
    foods: PropTypes.array.isRequired,
    handleAddFood: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        {this.props.foods.map((food, index) => (
          <FoodItem key={index} food={food} handleAddFood={this.props.handleAddFood}/>
        ))}
      </div>
    );
  }
}

export default Foods;
