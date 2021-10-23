import React, { Component } from 'react';
import { Placeholder } from './Placeholder';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Project Customize Products</h1>
            <a href='https://docs.google.com/document/d/1nOoYAFE4BTC2kovLBC13Mlza9_vf0f1Z4owRk-vuGK8/edit?usp=sharing'>Project Report in Google docs</a>
            <Placeholder></Placeholder>
      </div>
    );
  }
}
