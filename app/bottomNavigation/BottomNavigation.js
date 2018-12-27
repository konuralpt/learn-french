import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, View} from 'react-native';
import { Container, Header, Content, Button,Text,Footer,FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Router from '../routes';

class BottomNavigation extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <Container>

        <Content>
          <Router/>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="camera" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={this.navigateToScreen('WordGame')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="camera" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

BottomNavigation.propTypes = {
  navigation: PropTypes.object
};

export default BottomNavigation;
