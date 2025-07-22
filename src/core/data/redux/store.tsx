import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  // preloadedState:getPreloadedState()
});
// function onStateChange() {
//   saveToLocalStorage(store.getState());
// }
// store.subscribe(onStateChange);

export default store;
