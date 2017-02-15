import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';
import GetHomeReducer from './GetHomeReducer';
import RegisterReducer from './RegisterReducer';




const rootReducer = combineReducers({
  home: GetHomeReducer,
  weather: WeatherReducer,
  movie: MovieReducer,
  register: RegisterReducer
})

export default rootReducer;
