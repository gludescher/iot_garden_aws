import * as React from 'react';
import { View, ActivityIndicator, Text, Dimensions } from 'react-native';

// Componente que bloqueia a tela durante os loadings
interface Props {
  isLoading: Boolean,
  text: string,
}

export class LoadingScreen extends React.Component<Props> {
  render() {
    return (
      <>
        <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, position: 'absolute', top: this.props.isLoading ? 0 : -100000, zIndex: 100, opacity: this.props.isLoading ? 0.4 : 0, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }} />
        <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, position: 'absolute', top: this.props.isLoading ? 0 : -100000, zIndex: 101, opacity: this.props.isLoading ? 1 : 0, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ height: Dimensions.get('window').height * 0.2, width: '70%', alignItems: "center", justifyContent: "center", backgroundColor: '#ffffff', opacity: 0.9, borderRadius: 10 }}>
            <ActivityIndicator size="large" color="#009530" />
            <Text style={{ color: '#000000', fontSize: 16, marginTop: 20 }}>{this.props.text}</Text>
          </View>
        </View>
      </>
    )
  }
}

