import { createStore, compose } from "redux";
import rootReducer from './reducer';
import { sayHiOnDispatch, includeMeaningOfLife} from './exampleAddons/enhancers'

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const store = createStore(rootReducer, composedEnhancer);

export default store;