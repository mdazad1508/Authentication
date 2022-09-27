import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const incrementBy5handler = () => {
    dispatch(counterAction.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const count = useSelector((state) => state.counter.count); //by using useSelector the component automatically gets its subscription
  const show = useSelector((state) => state.counter.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5handler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
