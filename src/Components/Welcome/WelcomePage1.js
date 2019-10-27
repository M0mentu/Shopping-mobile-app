import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSectionNoBorder, Button } from '../../Common'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


class WelcomePage1 extends Component {
    state = {
        screen: 1

    }
    plus() {
        this.setState({ screen: this.state.screen + 1 })

    }
    renderImageUpward() {
        if (this.state.screen === 1) {
            return (
                <Image
                    source={require('../../Assets/wrapperIphone.png')}
                    style={Styles.imageStyle}
                    resizeMode='cover'
                />
            )
        }
        else if (this.state.screen === 2) {
            return (
                <Image
                    source={require('../../Assets/wrapperIphone.png')}
                    style={Styles.imageStyle}
                    resizeMode='cover'
                />
            )
        }
        else if (this.state.screen === 3) {
            return (
                <Image
                    source={require('../../Assets/wrapperIphone.png')}
                    style={Styles.imageStyle}
                    resizeMode='cover'
                />
            )
        }
        if (this.state.screen === 4) {
            return (
                Actions.homeUnsigned({id:'a7a'})
            );
        }
    }
    renderProgress() {
        if (this.state.screen === 1) {
            return (
                <Image
                    source={require('../../Assets/progressSymbol1.png')}
                    style={Styles.symbolStyle}

                />
            )
        }
        else if (this.state.screen === 2) {
            return (
                <Image
                    source={require('../../Assets/progressSymbol2.png')}
                    style={Styles.symbolStyle}

                />
            )
        }
        else if (this.state.screen === 3) {
            return (
                <Image
                    source={require('../../Assets/progressSymbol3.png')}
                    style={Styles.symbolStyle}

                />
            )
        }


    }
    render() {
        const { Container, textStyle, symbolStyle, imageStyle, buttonStyle } = Styles;

        return (
            <View style={Container}>

                {this.renderImageUpward()}
                <CardSectionNoBorder style={{ backgroundColor: "#fff", padding: 20, flexDirection: 'column' }}>
                    <Text style={textStyle} >Lorem ipsum dolor sit amet, consectetur </Text>
                    <Text style={textStyle} >adipiscing elit. Curabitur nec.</Text>
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: "#fff", padding: 20 }}>
                    {this.renderProgress()}
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ padding: 0, justifyContent: 'flex-end' }}>
                    <Button onPress={this.plus.bind(this)} style={{ backgroundColor: "#454545" }}>CONTINUE   <Icon name='caret-right'
                        size={25}
                        color="#fff"
                    /></Button>
                </CardSectionNoBorder>

            </View>
        );
    }
}
const Styles = {
    Container: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'relative'
    },
    textStyle: {

        color: '#454545',
        fontFamily: 'SourceSansPro',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '300',

    },
    symbolStyle: {
        width: 50,
        height: 12.96

    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',

    }
}

export default WelcomePage1; 