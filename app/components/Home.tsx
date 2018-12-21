import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes.json';
import * as style from './Home.css';

// tslint:disable-next-line:no-empty-interface
interface IProps {
  //
}

export default class Home extends React.Component<IProps> {
  public render() {
    return (
      <div className={style.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
