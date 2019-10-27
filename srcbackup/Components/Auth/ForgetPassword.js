import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Input, CardSectionNoBorder,Button ,Spinner} from '../../Common'
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { forgetEmailChange,  forgetEmail} from '../../Actions'


class ForgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailError: ''
        }
    }
    renderEmailIcon() {
        return (
            <Icon name='mail'
                size={20}
                color="#454545" />
        )
    }
    onEmailChange(text) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ emailError: 'Email format is not correct' })
            this.props.forgetEmailChange(text);
            return false;
        }
        else {
            this.setState({ emailError: '' })
            this.props.forgetEmailChange(text);
        }
    }
    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large" />)
        }
        else {
            return (
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 25, borderBottomWidth: 4, borderBottomColor: "#dcdcdc" }}>
                    <Button
                        onPress={this.ResetPasswordReset.bind(this)}
                        style={{ fontFamily: 'SourceSansPro' }}>
                        R E S E T  P A S S W O R D
                    </Button>
                </CardSectionNoBorder>
            )
        }
    }
    rendeEmailError() {
        if (this.state.emailError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={style.errortextStyle}>{this.state.emailError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    rendeError() {
        if (this.props.error) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={style.errortextStyle}>{this.props.error.message}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    ResetPasswordReset(email) {
        if(this.state.emailError===''){
            this.props.forgetEmail(email)

        }
    }
    render() {
        const { lineStyle, TextStyle,diamond } = style
        return (
            <Card>

                <CardSectionNoBorder style={{ backgroundColor: "#fff", padding: 25, flexDirection: 'column' }}>
                    <Text style={TextStyle}>Enter your registered Storex </Text>
                    <Text style={TextStyle}>password and we will email you </Text>
                    <Text style={TextStyle}>  a link to reset your password.</Text>
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: "#fff", padding: 25, flexDirection: 'column' }}>
                    <Image source={require('../../Assets/line-2.png')} style={lineStyle} resizeMode={'contain'} />
                </CardSectionNoBorder>
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', padding: 15 }}>
                    <Input label={this.renderEmailIcon()} palceholder="Email" onChangeText={this.onEmailChange.bind(this)} value={this.props.email} />
                </CardSectionNoBorder>
                {this.rendeEmailError() }
                {this. rendeError()}
                {this.renderButton()}
                <View style={diamond} />


            </Card>
        )
    }
}
const style = {
    TextStyle: {
        fontFamily: 'SourceSansPro',
        color: '#454545',
        fontFamily: 's',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '400',

    },
    lineStyle: {
        height: 2,
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    diamond: {
        width: 10,
        height: 10,
        alignSelf: 'center',


        backgroundColor: '#efb961',
        transform: [
            { rotate: '45deg' }
        ]
    },
    errortextStyle: {

        color: '#b30004',
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: '300',

    },
}
const mapStateToProps = ({ auth }) => {
    const { error, email, loading } = auth;
    return { error, loading, email };

}
export default connect(mapStateToProps, { forgetEmailChange,forgetEmail })(ForgetPassword);