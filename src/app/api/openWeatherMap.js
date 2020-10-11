import Axios from 'axios';
import {BASE_URL} from './openWeatherMapConstants';

export const getForecast = (location) => Axios.get('api.openweathermap.org/data/2.5/weather?q=peterborough&appid=de6ca33ba04e49bce54a82198bf75712&units=metric').then( res =>{
    console.log(res.data);
    return res.data;
});