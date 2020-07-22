import React, { Component } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit navigation={this.props.navigation} />
      </Wallpaper>
    );
  }
}
