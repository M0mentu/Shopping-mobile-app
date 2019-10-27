import {
  View, Image, StatusBar, TouchableWithoutFeedback, Dimensions, Text
} from 'react-native';
import { searchTextChange,SearchItemsAction } from '../../Actions'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Container, Header, Content, Left, Right, Body, Icon, Input, Item } from 'native-base'
import { Actions, Router, Scene } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');


class NavBar extends Component {
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
    if (this.state.searchBool) {
      return ([
        <Left style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => Actions.drawerOpen()}>
            <Icon type="Feather" name="menu" style={{ fontSize: 35 }} />
          </TouchableWithoutFeedback>
        </Left>,
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> </Text>
        </View>,
        <Right style={{ flex: 1 }}>
          <Item style={{ width: width * 0.80, borderBottomWidth: 0 }}>
            <Input onChangeText={this.onTextChange.bind(this)}
              returnKeyType='search'
              autoFocus={true}

              onSubmitEditing={_ => {if(this.props.searchText!=''){
               Actions.searchresult()
              }}}
              value={this.props.searchText} placeholder="Search Item"
              style={{ fontSize: 15, height: 40, borderWidth: 1, borderRadius: 10, borderColor: "#fefefefe", backgroundColor: "#fefefefe" }} />
            <Icon onPress={_ => this.setState({ searchBool: false })} type="Feather" name="search" />
          </Item>
        </Right>,
      ]
      )

    }

    else {
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
          <Item style={{ borderBottomWidth: 0 }}>
            <Icon onPress={_ => this.setState({ searchBool: true })} type="Feather" name="search" />
          </Item>
        </Right>,]
      )
    }
  }
  render() {
    return (
      // <View style={styles.backgroundStyle}>
      //   <StatusBar />
      //   <View style={{ flexDirection: 'row' }}>
      //     <TouchableWithoutFeedback onPress={() => Actions.drawerOpen()}>
      //       <Image
      //         source={require('../../Assets/icon-nav.png')}
      //         style={styles.backarrowStyle} />
      //     </TouchableWithoutFeedback>


      //   </View>
      // </View>

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
export default connect(mapStateToProps, { searchTextChange,SearchItemsAction })(NavBar);