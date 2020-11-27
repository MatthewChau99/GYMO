import React, { useState } from 'react';
import './App.css';
import About from './components/pages/About.js';
import Navbar from './components/layout/Navbar.js';
import Alert from './components/layout/Alert.js';
import Foods from './components/food/Foods.js';
import Food from './components/food/Food.js';
import Search from './components/food/Search.js';
import Footer from './components/layout/Footer.js';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [foods, setFoods] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [emptyFoods, setEmptyFoods] = useState(false);
  const [emptyName, setEmptyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [weightDict, setWeightDict] = useState({});

  const searchFoods = async text => {
    clearFoods();
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': '13bf1674',
          'x-app-key': 'ada01353fc5c6d209d9ed8d3fae7bcb9'
        }
      }
    );
    console.log(res.data);
    if (res.data.common.length === 0) {
      setEmptyFoods(true);
      setEmptyName(text);
      setTimeout(() => {
        setEmptyFoods(false);
        setEmptyName('');
      }, 7000);
    }
    setFoods(res.data.common);
    setLoading(false);
  };

  const clearFoods = () => {
    setFoods([]);
    setLoading(false);
    setAlert(null);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 7000);
  };


  const handleAddFood = (food, w) => {
    console.log(food)
    if (!foodList.includes(food)) {
      setFoodList(foodList => [...foodList, food])
      console.log(foodList)
    // setCalorie(food.nf_calories/food.serving_weight_grams*weight)
      setWeightDict({...weightDict, [food]: w})
      setTotalCalories(totalCalories+food.nf_calories/food.serving_weight_grams*w)
    } else {
      let newWeightDict = {...weightDict}
      newWeightDict[food] = parseFloat(newWeightDict[food]) + parseFloat(w)
      setWeightDict(newWeightDict)
      setTotalCalories(totalCalories+food.nf_calories/food.serving_weight_grams*w)
    }
    console.log(weightDict)
  }

  const handleDeleteFood = (food) => {
    setFoodList(foodList.filter(item => item.food_name !== food.food_name));
    setTotalCalories(totalCalories-food.nf_calories/food.serving_weight_grams*weightDict[food]);
  };

  return (
    <div>
      <main className='container'>
        <Alert alert={alert} emptyFoods={emptyFoods} emptyName={emptyName} />
        <Search
          searchFoods={searchFoods}
          clearFoods={clearFoods}
          setAlert={showAlert}
        />
        <div className='result-container'>
          <div className='search-food'>
            <Foods foods={foods} handleAddFood={handleAddFood}/>
          </div>
          <div>
            <div className='title'>
              FOOD LIST
            </div>
            <div className='foodlist-container'>
              {foodList.map((fooditem, index) => (
                <div className='fooditem-container'>
                  <div>
                    {fooditem.food_name}
                  </div>
                  <div>
                  <div className='result-container'>
                    {(fooditem.nf_calories/fooditem.serving_weight_grams*weightDict[fooditem]).toFixed(2)}
                    <div className='space'></div>
                    <button className='delete-button' onClick={() => handleDeleteFood(fooditem)}>
                      ×
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='fooditem-container'>
              <div>
                Total Calories:
              </div>
              <div>
                {totalCalories.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
