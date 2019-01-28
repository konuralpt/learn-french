import React, {Component} from 'react';
import { Container, Left, Body, Right, Button, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar,StyleSheet,View } from 'react-native'
import { Header } from 'react-native-elements';
import {StackNavigator } from 'react-navigation';

class WordGame extends Component {
  static navigationOptions = {
    headerTitle: 'sdsfs',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render () {

    return (
<Text>heamk</Text>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    height: 400,
    backgroundColor: '#ecf0f1',
  },
});
export default WordGame;
