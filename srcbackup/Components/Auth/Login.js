import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, LoginUser,GetUserData } from '../../Actions'
import { CardSectionNoBorder, Input, CardSection, Card, Button, Label, Spinner } from '../../Common';
import { ActionConst, Actions } from 'react-native-router-flux';
import { facebookService } from './facebookService'
import { getData } from '../../Helper';
var { height, width } = Dimensions.get('window');


class Login extends Component {
    constructor(props) {
        super(props)

        getData(0)
      
          
  
        
      
    }

    renderEmailIcon() {
        return (
            <Icon name='mail'
                size={20}
                color="#454545" />
        )
    }
    renderPassIcon() {
        return (
            <Icon name='lock'
                size={20}
                color="#454545" />
        )
    }
    onEmailChange(text) {
        this.props.emailChanged(text);

    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    signWithFacebook() {
        Actions.facebook();

    }
    signWithTwitter() {

        alert("twitter");

    }
    goSignup() {
        Actions.signup();
    }
    SignIn() {
        const { email, password } = this.props;
        this.props.LoginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View >
                    <Text style={Style.errortextStyle}>{this.props.error.message}</Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large" />)
        }
        else {
            return (
                <Button
                    onPress={this.SignIn.bind(this)}
                    style={{ marginLeft: 15, marginRight: 15 }}>
                    SIGN IN
                    </Button>
            )
        }
    }

    render() {
        const { lineStyle, containerStyle, textStyle, polygonStyle, socialMediaStyle, lineStyleBot } = Style;
        return (
            // <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
            //     <SafeAreaView style={{flex:1}}>

            <Card >
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15 }}>
                    <Input label={this.renderEmailIcon()} palceholder="Email" onChangeText={this.onEmailChange.bind(this)} value={this.props.email} />
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 0 }}>
                    <Image source={require('../../Assets/line-2.png')} style={lineStyle} resizeMode={'contain'} />
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15 }}>
                    <Input label={this.renderPassIcon()} palceholder="Password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} secureTextEntry />
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15 }}>
                    {this.renderError()}
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15 }}>
                    {this.renderButton()}
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15, borderBottomWidth: 4, borderBottomColor: "#dcdcdc" }}>
                    <Label>Forgot Password?</Label>

                </CardSectionNoBorder>
                <View style={[Style.diamond,{position:'absolute',marginTop:height/2-65}]}></View>


                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingTop: 20,
                }}>
                    <Text style={textStyle}>OR, SIGN IN USING SOCIAL </Text>
                    <Text style={textStyle}>NETWORKS</Text>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignContent: 'center',
                            alignItems: 'center',
                            paddingTop: 55,

                        }}>

                        <Image source={require('../../Assets/line-2.png')} style={lineStyleBot} />
                        <TouchableOpacity onPress={this.signWithFacebook.bind(this)}>
                            <Image source={require('../../Assets/facebook.png')} resizeMode={'cover'} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={this.signWithTwitter.bind(this)} >
                            <Image source={require('../../Assets/twitter.png')} resizeMode={'cover'} />
                        </TouchableOpacity >
                        <Image source={require('../../Assets/line-2.png')} style={lineStyleBot} />


                    </View >


                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 2,

                    }}>
                        <Text style={[textStyle]}>Not a member?</Text>
                        <Label onPress={this.goSignup.bind(this)} style={{ color: "#EFB961" }}>SIGN UP</Label>
                    </View>


                </View>

            </Card>
            //     </SafeAreaView>
            // </KeyboardAvoidingView>

        )
    }
}
const Style = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    textStyle: {

        color: '#454545',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '300',

    },
    errortextStyle: {

        color: '#b30004',
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: '300',

    },
    lineStyle: {
        height: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineStyleBot: {
        width: 50,
        height: 2,

    },

    diamond: {
        width: 15,
        height: 15,
        alignSelf: 'center',


        backgroundColor: '#efb961',
        transform: [
            { rotate: '45deg' }
        ]
    },
    socialMediaStyle: {
        height: 100,
        width: 100,
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading,user } = auth;
    return { email, password, error, loading,user};
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, LoginUser,GetUserData })(Login);
