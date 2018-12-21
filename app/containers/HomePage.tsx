import * as React from 'react';
import Home from '../components/Home';

// tslint:disable-next-line:no-empty-interface
interface IProps {}

export default class HomePage extends React.Component<IProps> {
  public props: IProps;

  public render() {
    return <Home />;
  }
}
