import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import {Card, CardSectionNoBorder, ButtonShop, Spinner} from '../../Common';
import img from '../../Assets/fill-2.png';
var {height, width} = Dimensions.get('window');
export default class Order extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          //   padding: 10,
          borderRadius: 3,
          backgroundColor: '#f2f2f2',
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.hedear}>
              <Text style={styles.hedtexts}>ORDER ID </Text>
              <Text style={styles.hedsubtexts}>c945387433 </Text>
            </View>
            <View style={[styles.hedear, {backgroundColor: '#e7e7e7'}]}>
              <Text style={styles.hedtexts}>AMOUNT </Text>
              <Text style={styles.hedsubtexts}>$400.50 </Text>
            </View>
            <View style={styles.hedear}>
              <Text style={styles.hedtexts}>ITEMS </Text>
              <Text style={styles.hedsubtexts}>3 </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 3,
              backgroundColor: '#ffffff',
              height: 200,
            }}>
            <View style={{paddingTop: 40, paddingLeft: 40}}>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Light',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                Placed on Sunday,
              </Text>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Light',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                December 30, 2014 at 09:32 am
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingTop: 20,
                padding: 10,
              }}>
              <Text style={[styles.texts, {textAlign: 'left'}]}>
                ORDER PLACED
              </Text>
              <Text style={[styles.texts, {textAlign: 'center'}]}>
                QUALITY CHECK
              </Text>
              <Text style={[styles.texts, {textAlign: 'right'}]}>CARRYOUT</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{paddingTop: 10}}>
                <Image style={{width: 25, height: 25}} source={img} />
              </View>
              <Text
                style={{
                  flex: 4,
                  color: '#ffffff',
                  fontFamily: 'SourceSansPro-Light',
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingTop: 10,
                }}>
                In Progress
              </Text>
              <ButtonShop
                style={{
                  flex: 5,
                  borderRadius: 3,
                  height: 40,
                  backgroundColor: '#454545',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#ffffff'}}>
                  VIEW DETAIL
                </Text>
              </ButtonShop>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
    flex: 1,
    fontFamily: 'SourceSansPro-Light',
    fontSize: 20,
    fontWeight: '400',
  },
  hedear: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  hedtexts: {
    fontSize: 25,
    fontFamily: 'SourceSansPro-Light',
    fontWeight: '600',
  },
  hedsubtexts: {
    color: '#999999',
  },
});
