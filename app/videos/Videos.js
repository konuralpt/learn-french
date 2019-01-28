import React, {Component} from 'react';
import {
  Text,
  View,Dimensions
} from 'react-native';
import { Container, Left, Button, Body, Title,Header,Content,Card,CardItem } from 'native-base';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Thumbnail } from 'react-native-thumbnail-video';

class Videos extends Component {

  createVideos (){
    var cards = [];
    var urls = ["https://www.youtube.com/watch?v=4lkwvVLApwc",
                "https://www.youtube.com/watch?v=AGiOBDEj8vk",
                "https://www.youtube.com/watch?v=bAK1A9fzSn0",
                "https://www.youtube.com/watch?v=TfBnEeGm0OQ",
                "https://www.youtube.com/watch?v=ngr9qAtjs84"];

    var headers = ["Fransızca Öğreniyorum | Fransızca Selamlaşma ve Tanışma",
                "Fransızca Öğreniyorum | Fransızca Selamlaşma Ders 2",
                "Fransızca Öğreniyorum | Fransızca Dersler Ünite 1",
                "Fransızca Öğreniyorum | Fransızca Dersler 4",
                "Fransızca Öğreniyorum | Fransızca Dersler, Milletler"];

    for(let i = 0; i < 5; i++){

      cards.push(
        <Card style={{marginLeft: 18,marginRight: 18,marginTop:5,marginBottom:5}} key="">

          <CardItem header bordered>
            <Text>{headers[i]}</Text>
          </CardItem>

          <CardItem bordered>
            <Body>
                <Thumbnail
                imageWidth = {Dimensions.get('window').width - 70}
                url={urls[i]} />
            </Body>
          </CardItem>

        </Card>
      )
    }
    return cards
  }

  render () {

    return (
      <Container>
        <Header noShadow style={{ backgroundColor: '#2B3252' }} androidStatusBarColor="#2B3252">
          <Left>
            <Button transparent>
              <Icon name="bars" color="white" />
            </Button>
          </Left>
          <Body>
            <Title>Videos</Title>
          </Body>
        </Header>
        <Content>

        { this.createVideos() }

        </Content>
      </Container>
    );
  }
}

export default Videos;
