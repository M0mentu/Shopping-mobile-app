import {
    View, Image, StatusBar, TouchableWithoutFeedback, Dimensions, Text
  } from 'react-native';
  import { searchTextChange,SearchItemsAction } from '../../Actions'
  import { connect } from 'react-redux'
  import React, { Component } from 'react';
  import { Container, Header, Content, Left, Right, Body, Icon, Input, Item } from 'native-base'
  import { Actions, Router, Scene } from 'react-native-router-flux';
  var { height, width } = Dimensions.get('window');
  
  
  class NavBarNormal extends Component {
    constructor(props) {
      super(props)
      this.state = {
        searchBool: false,
        textc: ''
      }
    }
    onTextChange(text) {
      console.log(text)
      this.props.searchTextChange(text)
    }
    rendersearch() {

        return ([
          <Left style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Actions.drawerOpen()}>
              <Icon type="Feather" name="menu" style={{ fontSize: 35 }} />
            </TouchableWithoutFeedback>
          </Left>,
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image resizeMode={"contain"} style={{ height: 35 }} source={require('../../Assets/store.png')} />
          </View>,
          <Right style={{ flex: 1 }}>
           <Text></Text>
          </Right>,]
        )
      
    }
    render() {
      return (
        <Header searchBar rounded style={styles.headerStyle}>
          {this.rendersearch()}
        </Header>
      );
    }
  
  }
  const styles = {
    backgroundStyle: {
      backgroundColor: '#f2f2f2',
      height: 50,
      justifyContent: 'center',
    },
    backarrowStyle: {
      resizeMode: 'contain',
      flexDirection: 'row',
      width: 35,
      height: 35,
      left: 0,
      justifyContent: 'flex-start'
    },
    helpStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      left: 220,
      justifyContent: 'flex-end',
      position: 'relative'
  
    },
    settingStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      justifyContent: 'flex-end',
      position: 'relative',
      left: 210
    },
    headerStyle: {
      backgroundColor: '#f2f2f2',
      elevation: 0,
      borderBottomWidth: 0,
      androidStatusBarColor: '#f2f2f2',
    },
  };
  
  const mapStateToProps = ({ myshop }) => {
    const { searchText } = myshop
    return { searchText };
  }
  export default connect(mapStateToProps, { searchTextChange,SearchItemsAction })(NavBarNormal);