import * as React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
export default function App() {
  const counter = useSelector((state) => state.count.counter);
  const show = useSelector((state) => state.toggle.show);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increaseBy', amount: 30 });
  };

  const toggleHandler = () => {
    dispatch({ type: 'toggle' });
  };
  return (
    <div>
      {show && <h1>{counter}</h1>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={toggleHandler}>toggle</button>
    </div>
  );
}
