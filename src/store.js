import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer';
import { sayHiOnDispatch, includeMeaningOfLife} from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware';


const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3),
    sayHiOnDispatch, 
    includeMeaningOfLife);

const store = createStore(rootReducer, composedEnhancer);

export default store;