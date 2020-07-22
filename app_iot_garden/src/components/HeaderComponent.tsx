import React from 'react';
import { Header } from 'react-native-elements';

interface Props {
  navigation: any,
  pageName: string,
}

interface State {
}

export class HeaderComponent extends React.Component<Props, State> {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff', onPress: this.handleMenuPress }}
        centerComponent={{ text: this.props.pageName, style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#fff', onPress: this.navigateHome }}
      />
    );
  }

  navigateHome = () => {
    this.props.navigation.navigate('Home');
  }

  handleMenuPress = () => {
    this.props.navigation.openDrawer();
  }
}