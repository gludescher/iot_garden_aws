import React from 'react';
import { HeaderComponent } from '../components';

interface Props {
  navigation: any
}

interface State {

}

export class MinhasPlantasScreen extends React.Component<Props, State> {
  render() {
    return (
      <>
        <HeaderComponent pageName={"Minhas Plantas"} navigation={this.props.navigation} />
      </>
    );
  }
}