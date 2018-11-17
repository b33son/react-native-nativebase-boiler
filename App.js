import React, { Component } from "react";
import { Root, Container, Text, StyleProvider } from "native-base";

import { Font, AppLoading } from "expo";
import getTheme from "./src/native-base-theme/components";
import squadColor from "./src/native-base-theme/variables/squadColor";
import SquadForce from "./src";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <Text>Loading...</Text>
        </Root>
      );
    }
    return (
      <StyleProvider style={getTheme(squadColor)}>
        <Container style={{ backgroundColor: "#000000" }}>
          <SquadForce />
        </Container>
      </StyleProvider>
    );
  }
}
