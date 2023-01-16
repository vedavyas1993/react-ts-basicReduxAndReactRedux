import { createStore, combineReducers } from 'redux';
const initialCounterState = { counter: 0 };
const initialtoggleState = { show: true };
const counterReducer = (state = initialCounterState, action) => {
  if (action.type == 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type == 'increaseBy') {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type == 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const toggleReducer = (state = initialtoggleState, action) => {
  if (action.type == 'toggle') {
    return {
      show: !state.show,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  count: counterReducer,
  toggle: toggleReducer,
});
const store = createStore(rootReducer);

export default store;
