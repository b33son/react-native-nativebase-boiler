/*
 * File: /Users/michaelbeeson/Documents/VSCode/squad-force/squad/src/index.js
 */

import React, { Component } from "react";
import {
  Root,
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Body,
  Title,
  StyleProvider,
  View,
  Icon
} from "native-base";
import Test from "./components/test";
import Login from "./components/auth/login";
import OrgList from "./components/organization/org-list";

export default class SquadForce extends Component {
  constructor(props) {
    super(props);
    this.state = { asdf: 1 };
  }
  //https://itnext.io/configure-absolute-paths-with-create-react-app-and-flow-e4b8922676a2
  render() {
    return <OrgList />;
  }
}
