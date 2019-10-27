import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Icon,
  FooterTab,
  Container,
  Content,
  Badge,
  Accordion,
  Footer,
  Row,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Input,
} from 'native-base';
import {Button as Buttonnative, Picker} from 'native-base';
import {connect} from 'react-redux';
import {Progressline, CardSectionNoBorder, Button} from '../../Common';
import {Actions} from 'react-native-router-flux';
import {CreditCardInput, updateCreditCard} from '../../Actions';
import {Header} from 'react-navigation';

class PaymentInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paypalBorder: '#cccccc',
      visamastercardBorder: '#cccccc',
      paypalBorderR: 2,
      visamastercardBorderR: 2,
    };
  }
  PaypalPressed() {
    this.setState({
      paypalBorder: '#efb961',
      visamastercardBorder: '#cccccc',
      paypalBorderR: 3,
      visamastercardBorderR: 1,
    });
  }
  VisaMasterCardPressed() {
    this.setState({
      visamastercardBorder: '#efb961',
      paypalBorder: '#cccccc',
      paypalBorderR: 1,
      visamastercardBorderR: 3,
    });
  }
  CreditTextChange(text) {
    this.props.CreditCardInput(text);
  }
  render() {
    console.log(this.props);
    const {user} = this.props;
    const {paymentImage, textStyle, leftStyle, rightStyle, inputStyle} = style;
    return (
      <KeyboardAvoidingView
        // adjust the value here if you need more padding
        keyboardVerticalOffset={Header.HEIGHT - 220}
        style={{flex: 1}}
        behavior="padding">
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{flex: 8, flexDirection: 'column', backgroundColor: '#fff'}}>
            {/* <Progressline style1={{ backgroundColor: "#cccccc" }} style2={{ backgroundColor: "#efb961" }} style3={{ backgroundColor: "#cccccc" }} /> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flex: 2,
              }}>
              <TouchableOpacity
                onPress={_ => {
                  this.PaypalPressed();
                }}>
                <Image
                  source={require('../../Assets/paypal.png')}
                  style={[
                    paymentImage,
                    {
                      borderWidth: this.state.paypalBorderR,
                      borderColor: this.state.paypalBorder,
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={_ => {
                  this.VisaMasterCardPressed();
                }}>
                <Image
                  source={require('../../Assets/visamaster.png')}
                  style={[
                    paymentImage,
                    {
                      borderWidth: this.state.visamastercardBorderR,
                      borderColor: this.state.visamastercardBorder,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 0,
                paddingBottom: 30,
                paddingLeft: 10,
                paddingRight: 10,
                flex: 4,
              }}>
              <Text style={textStyle}>CARD DETAILS</Text>
              <Text
                style={[
                  textStyle,
                  {color: '#999999', fontSize: 17, paddingBottom: 30},
                ]}>
                Enter your debit or credit card details.
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#cccccc',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={leftStyle}>
                    <Text style={[textStyle, {fontWeight: '200'}]}>
                      Card no:
                    </Text>
                  </View>
                  <View style={rightStyle}>
                    <Input
                      keyboardType={'number-pad'}
                      style={inputStyle}
                      placeholder="..."
                      onChangeText={this.CreditTextChange.bind(this)}
                      value={this.props.creditCard}
                    />
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={leftStyle}>
                    <Text style={[textStyle, {fontWeight: '200'}]}>Expir:</Text>
                  </View>
                  <View style={rightStyle}>
                    <Input
                      keyboardType={'number-pad'}
                      style={inputStyle}
                      placeholder="..."
                    />
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={leftStyle}>
                    <Text style={[textStyle, {fontWeight: '200'}]}>
                      CVC Code:
                    </Text>
                  </View>
                  <View style={rightStyle}>
                    <Input
                      keyboardType={'number-pad'}
                      style={inputStyle}
                      placeholder="..."
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#F2F2F2',
                borderTopWidth: 1,
                borderTopColor: '#bfbfbf',
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'column', paddingLeft: 10, flex: 3}}>
                <Text style={textStyle}>SHIP TO</Text>
                <Text style={[textStyle, {color: '#999999', fontSize: 18}]}>
                  {user.city}, {user.country}
                  {'\n'}
                  {user.postal_code}, {user.address_1}
                  {/* hamada el teneeeen
                                    ,l;lkads;lk {'\n'}
                                    l,;l,d;lmn j jnkjnkjan {'\n'}    */}
                </Text>
              </View>
              <View style={{alignContent: 'flex-end', flex: 0.5}}>
                <Buttonnative
                  onPress={() => {
                    alert('pressed!');
                  }}
                  transparent>
                  <Icon type="Feather" name="edit" style={{color: '#454545'}} />
                </Buttonnative>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#454545',
                padding: 0,
                flexDirection: 'column',
                flex: 1,
              }}>
              <Button
                // onPress={_ => this.OrderNow()}
                style={{
                  backgroundColor: '#454545',
                  fontFamily: 'SourceSansPro',
                  // alignSelf: 'stretch',
                }}>
                SAVE INFORMATION
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const style = StyleSheet.create({
  paymentImage: {
    width: 180,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'SourceSansPro',
    color: '#454545',
    fontWeight: '700',
  },
  leftStyle: {
    backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    height: 70,
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    flex: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  inputStyle: {
    paddingLeft: 20,
    color: '#454545',
    fontFamily: 'SourceSansPro',
    fontSize: 20,
    fontWeight: '700',
  },
});
const mapStateToProps = ({auth}) => {
  const {user, creditCard, shippingplan, orderData} = auth;
  return {user, creditCard, shippingplan, orderData};
};
export default connect(
  mapStateToProps,
  {CreditCardInput, updateCreditCard},
)(PaymentInfoPage);
