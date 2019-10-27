import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {CardSectionNoBorder} from '../Common';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Icon, Badge} from 'native-base';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');
class SideMenu extends Component {
  render() {
    const {buttonText, container, followText, badgeStyle} = styles;
    return (
      <View style={container}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#454545', '#303030']}
          style={{flex: 1}}>
          <View style={{backgroundColor: 'transparent', flex: 1}}>
            <View
              style={{ 
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#585858',
              }}>
              <Button
                onPress={_ => Actions.shop()}
                transparent
                icon
                large
                style={{flexDirection: 'column', flex: 1}}>
                <Icon
                  type="Feather"
                  name="hexagon"
                  style={{color: '#fff', fontSize: 30}}
                />
                <Text style={buttonText}>Shop</Text>
              </Button>
              <View
                style={{
                  width: 1,
                  height: height * 0.66,
                  backgroundColor: '#585858',
                }}
              />

              <Button
                badge
                transparent
                icon
                large
                style={{flexDirection: 'column', flex: 1}}>
                <Icon
                  type="Feather"
                  name="shopping-bag"
                  style={{color: '#fff', fontSize: 30}}
                />
                <Badge
                  style={[
                    badgeStyle,
                    {
                      position: 'absolute',
                      marginTop: 5,
                      marginLeft: 85,
                      backgroundColor: '#f3b453',
                    },
                  ]}>
                  <Text>{this.props.cartCount}</Text>
                </Badge>

                <Text style={buttonText}>Bag</Text>
              </Button>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#585858',
              }}>
              <Button
                transparent
                icon
                large
                style={{flexDirection: 'column', flex: 1}}>
                <Icon
                  type="Feather"
                  name="sun"
                  style={{color: '#fff', fontSize: 30}}
                />
                <Text style={buttonText}>Inspiration</Text>
              </Button>
              <Image
                source={require('../Assets/polygongrey.png')}
                style={{marginTop: height / 4 - 23, alignSelf: 'center'}}
              />
              <Button
                transparent
                icon
                large
                style={{flexDirection: 'column', flex: 1}}>
                <Icon
                  type="Feather"
                  name="map-pin"
                  style={{color: '#fff', fontSize: 30}}
                />
                <Text style={buttonText}>Store</Text>
              </Button>
            </View>
          </View>

          <View style={{flex: 1.2, alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={_ => Actions.account()}
                style={{
                  width: width - 80,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  borderBottomWidth: 1,
                  borderBottomColor: '#585858',
                }}>
                <Text style={buttonText}>My Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: width - 80,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  borderBottomWidth: 1,
                  borderBottomColor: '#585858',
                }}>
                <Text style={buttonText}>Customer Support</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: width - 80,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  borderBottomWidth: 1,
                  borderBottomColor: '#585858',
                }}>
                <Text style={[buttonText, {color: '#f3b453'}]}>Log Out</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={followText}>FOLLOW US</Text>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  paddingTop: 30,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../Assets/facebookgrey.png')}
                    resize={'contain'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../Assets/twittergrey.png')}
                    resize={'contain'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../Assets/pinterestgrey.png')}
                    resize={'contain'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SourceSansPro-Light',
    fontSize: 25,
    fontWeight: '300',
  },
  followText: {
    color: '#7e7e7e',
    fontFamily: 'SourceSansPro',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 6,
    paddingTop: 30,
  },
  badgeStyle: {
    backgroundColor: '#454545',
    borderWidth: 3,
    borderColor: '#454545',
  },
};
const mapStateToProps = ({myshop}) => {
  const {cartCount} = myshop;
  return {cartCount};
};
export default connect(
  mapStateToProps,
  null,
)(SideMenu);
