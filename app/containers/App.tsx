import * as React from 'react';

interface IProps {
  children: React.ReactNode
}

export default class App extends React.Component<IProps> {
  public props: IProps;

  public render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
