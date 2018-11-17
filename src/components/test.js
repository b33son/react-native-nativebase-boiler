/*
 * File: /Users/michaelbeeson/Documents/VSCode/squad-force/squad/src/components/test.js
 */

import React, { Component } from "react";
import { View, Text } from "react-native";

import { Image } from "react-native";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>hi</Text>
        <Image source={require("src/assets/icon.png")} />
      </View>
    );
  }
}
