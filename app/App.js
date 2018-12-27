import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Router from './routes';
import BottomNavigation from './bottomNavigation/BottomNavigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Home from './home/Home';
import Videos from './videos/Videos';
import WordGame from './wordgame/WordGame';
import SideMenu from './SideMenu/SideMenu';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View>
      <Text>asfasd</Text>
      </View>
    );
  }
}

const RootStack = createMaterialBottomTabNavigator({
  Videos: { screen: Videos,
    navigationOptions:{
      tabBarLabel: 'Videos',
      tabBarIcon: ({tintColor})=>(
        <Icon name="play" color={tintColor} size={24}/>
      )
    }},
  Home: { screen: Home,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor})=>(
        <Icon name="home" color={tintColor} size={24}/>
      )
    }
  },
  WordGame: { screen: WordGame,
    navigationOptions:{
      tabBarLabel: 'WordGame',
      tabBarIcon: ({tintColor})=>(
        <Icon name="gamepad" color={tintColor} size={24}/>
      )
    }}
},{
  initialRouteName: 'Home',
  order: ['Videos','Home','WordGame'],
  activeTintColor: '#2B3252',
  inactiveTintColor: '#808080',
  barStyle: { backgroundColor: '#FAD744' },
  shifting: true,

});

const Appp = createAppContainer(RootStack);

export default Appp;
