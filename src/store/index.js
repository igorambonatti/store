import { createStore } from 'redux';

import rootReducer from './models/cart/reducer';

const store = createStore(rootReducer);

export default store;
