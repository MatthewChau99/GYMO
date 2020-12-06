import React, {useState} from 'react';
import './App.css';
import About from './components/pages/About.js';
import Navbar from './components/layout/Navbar.js';
import Alert from './components/layout/Alert.js';
import Foods from './components/food/Foods.js';
import Food from './components/food/Food.js';
import Search from './components/food/Search.js';
import Footer from './components/layout/Footer.js';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
        await clearFoods();
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
        if (res.data.common.length === 0) {
            setEmptyFoods(true);
            setEmptyName(text);
            setTimeout(() => {
                setEmptyFoods(false);
                setEmptyName('');
            }, 7000);
        }
        await setFoods(res.data.common);
        await setLoading(false);
    };

    const clearFoods = async () => {
        await setFoods([]);
        await setLoading(false);
        await setAlert(null);
    };

    const showAlert = (msg, type) => {
        setAlert({msg, type});
        setTimeout(() => setAlert(null), 7000);
    };

    const handleAddFood = async (food, w) => {
        if (!foodList.includes(food)) {
            await setFoodList(foodList => [...foodList, food]);
            // setCalorie(food.nf_calories/food.serving_weight_grams*weight)
            await setWeightDict({...weightDict, [food.food_name]: w});
            await setTotalCalories(totalCalories + food.nf_calories / food.serving_weight_grams * w)
        } else {
            console.log(food);
            let newWeightDict = {...weightDict};
            newWeightDict[food.food_name] = parseFloat(newWeightDict[food.food_name]) + parseFloat(w);
            await setWeightDict(newWeightDict);
            await setTotalCalories(totalCalories + food.nf_calories / food.serving_weight_grams * w)
        }
    };

    const handleDeleteFood = async (food) => {
        await setFoodList(foodList.filter(item => item.food_name !== food.food_name));
        await setTotalCalories(totalCalories - food.nf_calories / food.serving_weight_grams * weightDict[food.food_name]);
    };

    return (
        <div>
            <main className='container'>
                <Alert alert={alert} emptyFoods={emptyFoods} emptyName={emptyName}/>
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
                                            {(fooditem.nf_calories / fooditem.serving_weight_grams * weightDict[fooditem.food_name]).toFixed(2)}
                                            <div className='space'/>
                                            <button className='delete-button'
                                                    onClick={() => handleDeleteFood(fooditem)}>
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
