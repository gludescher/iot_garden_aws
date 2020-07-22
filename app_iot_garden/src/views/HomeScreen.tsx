import React from 'react';
import { HeaderComponent } from '../../components';

interface Props {
  navigation: any,
}

interface State {

}

export class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <>
        <HeaderComponent navigation={this.props.navigation} />
      </>
    );
  }
}
