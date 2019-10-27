import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {CardSectionNoBorder}from '../../Common'
import {Actions,ActionConst}from 'react-native-router-flux';

class WelcomePage extends Component {
    constructor(props){
        super(props)
        setTimeout(function () {
            Actions.welcomepage1();
        }, 1000)
    }
    render() {
        const{logo,Container}=Styles;
        return (
            <View style={Container}>
                <CardSectionNoBorder>
                <Image
                    source={require('../../Assets/logosymbol.png')}
                    style={logo}
                />
                </CardSectionNoBorder>
            </View>
        )
    }
}
const Styles = {
    Container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ffff",
    },
    logo: {
        width: 120.42,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
export default WelcomePage;