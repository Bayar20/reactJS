import React, { useState } from 'react'; 
// import { useReducer } from 'react';

function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const nextState    = reducer(state, action);
        setState(nextState);
    }
    
    return [state, dispatch];
}

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset': 
      return {count: action.payload}
    default:
      throw new Error();
  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Num: {state.count}</h1>
      <button
        onClick={() => dispatch({type: 'increment',})}
      >
        +
      </button>
      <button
        onClick={() => dispatch({type: 'reset', payload: 100})}
      >
        Reset
      </button>
      <button
       onClick={() => dispatch({type: 'decrement'})}
      >
        -
      </button>
    </div>
  );
};

export default Counter;