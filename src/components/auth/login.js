/*
 * File: /Users/michaelbeeson/Documents/VSCode/squad-force/squad/src/components/auth/login.js
 */

// import React from "react";
// import { Text, View } from "react-native";

// const Login = ({ params }) => (
//   <View>

//   </View>
// );

// export default Login;

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  View
} from "native-base";

class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 100 }}>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("src/assets/Logo-97.png")}
            />
          </Right>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" secureTextEntry />
            </Item>
          </Form>
          <Button primary block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    width: 50,
    height: 50,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  }
});

export default Login;
