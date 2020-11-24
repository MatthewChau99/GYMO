import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Food = ({ food, handleAddFood }) => {

  // useEffect(() => {
  //   getFood(food.food_name);
  //   // eslint-disable-next-line
  // }, [food]);
  // console.log(food);

  const {
    food_name,
    serving_weight_grams,
    nf_calories,
    nf_total_carbohydrate,
    nf_sugars,
    nf_protein,
    nf_sodium,
    nf_total_fat,
    nf_saturated_fat
  } = food;
<<<<<<< HEAD

=======
  const [weight, setWeight] = useState();
  const onChange = e => setWeight(e.target.value);
>>>>>>> frontend-ran
  return (
    <Fragment>
      <div className='center-page'>
        {/* <h2>{food_name}</h2> */}
        <ul className='nutrition-list'>
          <li>serving size in grams: {serving_weight_grams}</li>
          <li>calories: {nf_calories}</li>
          <li>cabohydrates: {nf_total_carbohydrate}</li>
          <li>sugars: {nf_sugars}</li>
          <li>protein: {nf_protein}</li>
          <li>sodium: {nf_sodium}</li>
          <li>total fat: {nf_total_fat}</li>
          <li>saturated fat: {nf_saturated_fat}</li>
<<<<<<< HEAD
          <button className='add-button' onClick={() => handleAddFood(food)}>
=======
          <input
            type='number'
            name='number'
            // className='searchInput'
            placeholder='weight in grams'
            // value={20}
            onChange={onChange}
          />
          <button className='add-button' onClick={() => handleAddFood(food, weight)}>
>>>>>>> frontend-ran
            Add
          </button>
        </ul>
      </div>
    </Fragment>
  );
};

Food.propTypes = {
  getFood: PropTypes.func.isRequired
};

export default Food;
