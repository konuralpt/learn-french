import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class WordGame extends Component {
  render () {
    return (
      <Container>
        <Header noShadow>
          <Left>
            <Button transparent>
              <Icon name="bars" color="white" />
            </Button>
          </Left>
          <Body>
            <Title>Word Game</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default WordGame;
