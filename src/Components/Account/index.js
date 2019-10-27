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
import img from '../../Assets/fill.png';
import img2 from '../../Assets/fill2.png';
import img3 from '../../Assets/fill3.png';
var {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
export class Account extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <CardSectionNoBorder style={styles.Hedear}>
          <Text style={styles.Hedeartext}>MY ACCOUNT</Text>
        </CardSectionNoBorder>
        <CardSectionNoBorder style={styles.Orders}>
          <ButtonShop
            onPress={_ => Actions.orderstatus()}
            style={styles.OrderButton}>
            <Image style={[styles.icon, {width: 25}]} source={img} />
          </ButtonShop>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={[
                styles.OrdersText,
                {textAlign: 'left', paddingRight: width / 3},
              ]}>
              Last Order: <Text>30.12.2014 </Text>
            </Text>
            <Text style={[styles.OrdersText, {textAlign: 'right'}]}>
              ID: <Text>ads221sad5</Text>
            </Text>
          </View>
        </CardSectionNoBorder>
        <TouchableOpacity
          onPress={_ => Actions.paymentinfopage()}
          style={styles.Payment}>
          <Left style={{flex: 1}}>
            <Image source={img2} style={styles.icon} />
          </Left>
          <Body style={{flex: 4}}>
            <Text style={styles.Hedeartext}>Payment Information</Text>
          </Body>

          <Right style={{flex: 1}}>
            <Icon type="Feather" name="chevron-right" />
          </Right>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_ => Actions.settings()}
          style={styles.Settings}>
          <Left style={{flex: 1}}>
            <Image source={img3} style={[styles.icon, {width: 25}]} />
          </Left>
          <Body style={{flex: 4}}>
            <Text style={styles.Hedeartext}>Settings</Text>
          </Body>

          <Right style={{flex: 1}}>
            <Icon type="Feather" name="chevron-right" />
          </Right>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Account;

const styles = StyleSheet.create({
  OrdersText: {
    color: '#999999',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
  },
  icon: {
    width: 20,
    height: 25,
  },
  OrderButton: {
    height: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#454545',
  },
  Payment: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
  },
  Settings: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
  },
  Orders: {
    flexDirection: 'column',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
  },
  Hedear: {
    height: 70,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
  },
  Hedeartext: {
    color: '#454545',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'left',
  },
});
