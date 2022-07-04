const redux = require('redux');

const defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

console.log(store.getState());

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
