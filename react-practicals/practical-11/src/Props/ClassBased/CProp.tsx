import { Component, ReactNode } from 'react';
import { CProps } from '../type';

class CProp extends Component<CProps> {
  constructor(props: CProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div>
        CProps name: {this.props.name} &nbsp; CProps age: {this.props.age}
      </div>
    );
  }
}

export default CProp;
