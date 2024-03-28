import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { hotelsReducer } from './reducers/hotelReducer';
import { alertsReducer } from './reducers/alertReducer';
import { bookingsReducer } from './reducers/bookingReducer';
import {userReducer} from './reducers/userReducer';
import {menuReducer} from './reducers/menuReducer';

const rootReducer = combineReducers({
  hotelsReducer,
 alertsReducer,
 bookingsReducer,
 userReducer,
 menuReducer,
});

// Use composeWithDevTools correctly
const composeEnhancers = composeWithDevTools({
  // Specify extension options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
