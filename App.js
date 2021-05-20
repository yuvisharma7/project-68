import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import FacebookScreen from "./screens/facebookscreen";
import InstagramScreen from "./screens/Instagramscreen";
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
     
        <Appcontainer />
     
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:FacebookScreen},
  Instagram: {screen:InstagramScreen},
});
const Appcontainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'Black',
    alignItems: "center",
    justifyContent: "center",
  }
})