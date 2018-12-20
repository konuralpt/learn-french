import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, View} from 'react-native';
import { Container, Header, Content, Button,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View>
      <ScrollView>
      <Button iconLeft full primary bordered style={styles.button} onPress={this.navigateToScreen('Home')}>
        <Icon name='home' color='black' />
        <Text>Home</Text>
      </Button>

      <Button iconLeft full info bordered style={styles.button} onPress={this.navigateToScreen('WordGame')}>
        <Icon name='gamepad' color='black' />
        <Text>Word Game</Text>
      </Button>

      <Button iconLeft full info bordered style={styles.button} onPress={this.navigateToScreen('Videos')}>
        <Icon name='play' color='black' />
        <Text>Videos</Text>
      </Button>

      </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
