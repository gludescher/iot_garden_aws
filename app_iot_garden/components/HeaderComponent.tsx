import React from 'react';
import { Header } from 'react-native-elements';

interface Props {
  navigation: any
}

interface State {
}

export class HeaderComponent extends React.Component<Props, State> {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff', onPress: this.handleMenuPress }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }

  handleMenuPress = () => {
    this.props.navigation.openDrawer()
  }
}