import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from "react";
import Food from "./Food"
import axios from 'axios';

const FoodItem = ({food}) => {
  // static propTypes = {
  //   food: PropTypes.object.isRequired
  // };
  console.log('!!!')
  const [sfood, setFood] = useState({});
  const [isShowing, setShowing] = useState(false);
  const getFood = async id => {
    setFood({});
    // setLoading(false);
    // setAlert(null);
    const myData = { query: id };

    const encodeForm = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    };

    const res = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      encodeForm(myData),
      {
        headers: {
          'x-app-id': '13bf1674',
          'x-app-key': 'ada01353fc5c6d209d9ed8d3fae7bcb9',
          'x-remote-user-id': 0
        }
      }
    );
    console.log(res.data.foods[0]);

    // setLoading(false);
    setFood(res.data.foods[0]);
  };
  const onClick = () => {
    setShowing(!isShowing);
    getFood(food.food_name);
    console.log(food);
  }
  const { food_name } = food;

    return (
      <div>
        <div className='food-item' onClick={onClick}>
          {food_name}
        </div>
        <div>
        {isShowing ?
          <Food food={sfood} />
        : null}
        </div>
      </div>
    );
}

export default FoodItem;
