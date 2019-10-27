import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  ToastAndroid,
  Image,
} from 'react-native';
import {Card, CardSectionNoBorder, ButtonShop, Spinner} from '../../Common';
import {
  Icon,
  FooterTab,
  Header,
  Container,
  Content,
  Button,
  Badge,
  Accordion,
  Footer,
  Row,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
} from 'native-base';
var {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';
import Order from './order';
export default class OrderStatus extends Component {
  render() {
    const {headerStyle, TextStyle} = styles;
    return (
      <Container>
        <Header style={headerStyle}>
          <View style={{justifyContent: 'center'}}>
            <Icon
              type="Feather"
              name="chevron-left"
              onPress={_ => Actions.account()}
            />
          </View>
          <View style={{width: width - 50, justifyContent: 'center'}}>
            <Text style={TextStyle}>ORDER STATUS</Text>
          </View>
        </Header>
        <Content>
          <ScrollView style={{padding: 10}}>
            <Order />
            <Order />
            <Order />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#f2f2f2',
    elevation: 0,
    borderBottomWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    androidStatusBarColor: '#f2f2f2',
  },
  TextStyle: {
    fontFamily: 'SourceSansPro-Light',
    fontSize: 18,
    color: '#454545',
    textAlign: 'center',
  },
};
