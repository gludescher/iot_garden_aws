import React from 'react';
import { HeaderComponent, LoadingScreen } from '../components';
import { NetInfoFetch, UserMockedFetch } from '../utils';

interface Props {
  navigation: any,
}

interface State {
  initialLoading: Boolean,
  loadingText: string,

}

export class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialLoading: true,
      loadingText: 'Carregando suas informações...'
    }
  }

  componentDidMount() {
    this.getAPIUserValues;
  }

  render() {
    if (this.state.initialLoading) {
      return (
        <>
          <HeaderComponent pageName={"Home"} navigation={this.props.navigation} />
          <LoadingScreen isLoading={this.state.initialLoading} text={this.state.loadingText} />
        </>
      )
    }

    return (
      <>
        <HeaderComponent pageName={"Home"} navigation={this.props.navigation} />
      </>
    );
  }

  getAPIUserValues = async () => {
    // Fetch da API
    // const url = "";

    // const noConnectionFunction = () => {

    // }

    // const badRequestFunction = () => {

    // }

    // const errorFunction = () => {

    // }

    // const successFunction = () => {

    // }
    // await NetInfoFetch(url, null, noConnectionFunction, badRequestFunction, errorFunction, successFunction);

    // Mockado por enquanto
    // const responseJson = UserMockedFetch;
    setTimeout(() => {
      this.setState({ initialLoading: false })
    }, 2000)

  }
}
