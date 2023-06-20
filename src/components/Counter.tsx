import { FC, useState } from 'react';
import classes from './Counter.module.scss';

export interface CounterProps {}

export const Counter: FC<CounterProps> = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button className={classes.button} onClick={increment}>
        Click
      </button>
    </div>
  );
};
