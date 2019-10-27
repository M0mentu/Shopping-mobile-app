import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { CardSectionNoBorder, Button } from '../../Common';
import{Actions}from 'react-native-router-flux';

class HomeUnsigned extends Component {

render() {
    alert(this.props.id)
const {Container,followthel,logo,hexaimage}=Styles;
    return (
        <View style={Container}>
            <CardSectionNoBorder>
                <Image
                    source={require('../../Assets/logosymbol.png')}
                    style={logo}
                />
            </CardSectionNoBorder>
            <Text style={followthel}>Follow the latest fashion trends</Text>
            <Text style={followthel}>and stop with<Text style={followthel, { color: "#EFB961", }}> storex!</Text></Text>
            <CardSectionNoBorder style={{ marginTop: 35, padding: 25 }}>
                <Image
                    source={require('../../Assets/hexaimage.png')}
                    style={hexaimage}
                />
            </CardSectionNoBorder>
            <CardSectionNoBorder style={{ padding: 0, justifyContent: 'flex-end' }}>
                <Button onPress={()=>{Actions.Auth()}}>SIGN IN</Button>
            </CardSectionNoBorder>
        </View>

    );
}
}
const Styles = {
    Container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "#ffff",
    },
    logo: {
        width: 120.42,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followthel: {
        fontFamily: 'SourceSansPro',
        color: '#454545',
        fontFamily: 's',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '300',

    },
    hexaimage: {

        width: 400,
        height: 400,

    }
}
export default HomeUnsigned;