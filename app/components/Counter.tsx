import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes.json';
import * as style from './Counter.css';

interface IProps {
  counter: number;
  increment(): void;
  incrementIfOdd(): void;
  incrementAsync(): void;
  decrement(): void;
}

export default class Counter extends React.Component<IProps> {
  public render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter,
    } = this.props;
    return (
      <div>
        <div className={style.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${style.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={style.btnGroup}>
          <button
            className={style.btn}
            onClick={increment}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={style.btn}
            onClick={decrement}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className={style.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={style.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}
