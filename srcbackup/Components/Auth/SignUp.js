import React, { Component } from 'react';
import { Image, View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import {
    lastNameChanged, firstNameChanged, passwordChangedSignUp,
    passwordRetypeChanged, dateDayChanged, dateMonthChanged,
    dateYearChanged, genderChanged, termsChanged, SignUpAction, emailChangedSignUp
} from '../../Actions'
import { Card, InputBB, Input, CardSectionNoBorder, Label, Button, Spinner } from '../../Common';
import { Switch } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { Header } from 'react-navigation';


//===============================================================================================


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            femaleColor: "#999999",
            isSwitchOn: false,
            passwordError: '',
            emailError: '',
            nameError: ''
        }
    }
    onFirstNameChange(text) {
        let reg = /^[a-zA-Z]*$/;

        if (reg.test(text) === false) {
            this.setState({ nameError: 'Name only contains letters' })
            this.props.firstNameChanged(text);
            return false;
        }
        else {
            this.setState({ nameError: '' })
            this.props.firstNameChanged(text);

        }
    }
    onEmailChange(text) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ emailError: 'Email is not correct' })
            this.props.emailChangedSignUp(text);
            return false;
        }
        else {
            this.setState({ emailError: '' })
            this.props.emailChangedSignUp(text);
            console.log("Email is  Correct");

        }
    }
    onLastNameChange(text) {
        this.props.lastNameChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChangedSignUp(text);
        const { password, passwordRetype } = this.props
        console.log(password+"   zapasssss     "+passwordRetype)
        if (text == passwordRetype) {
            this.setState({ passwordError: '' })
        }
        else if(text !=passwordRetype){
            this.setState({ passwordError: 'password does not match' })
        }
    }
    onPasswordRetypeChange(text) {
        this.props.passwordRetypeChanged(text);

        const { password, passwordRetype } = this.props
                console.log(password+"   zapasssss     "+passwordRetype)

        if (password == text) {
            this.setState({ passwordError: '' })
        }
        else if(password !=text){
            this.setState({ passwordError: 'password does not match' })
        }
    }

    onDateDayChange(text) {
        this.props.dateDayChanged(text);
    }
    onDatemonthyChange(text) {
        this.props.dateMonthChanged(text);
    }
    onDateyearChange(text) {
        this.props.dateYearChanged(text);
    }
    OnmaleSelected() {
        this.props.genderChanged('Male')
        this.setState({ maleColor: '#454545', femaleColor: '#999999' })

    }
    OnfemaleSelected() {
        this.props.genderChanged('Female')
        this.setState({ maleColor: '#999999', femaleColor: '#454545' })
    }
    renderGenderSelection() {
        const { gender } = this.props
        if (gender === 'Male') {
            return (

                <Image source={require('../../Assets/maleSelected.png')} style={{ width: 700 }} resizeMode={'contain'} />
            )
        }
        else {
            return (
                <Image source={require('../../Assets/femaleSelected.png')} resizeMode={'contain'} />
            )
        }
    }
    onTermsPressed() {
        this.props.termsChanged(!this.state.isSwitchOn);
    }
    goSignIn() {
        Actions.login();
    }
    renderPasswordError() {
        if (this.state.passwordError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.passwordError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderEmailError() {
        if (this.state.emailError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.emailError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderNameError() {
        if (this.state.nameError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.nameError}</Text>
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
                        <Text style={Styles.errortextStyle}>{this.props.error.message}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    resetPasswordError() {
        this.setState({ passwordError: '' });
    }
    SignUpPressed() {

        const { firstName, lastName, email, password, passwordRetype, day, month, year, gender, terms } = this.props
       // password == passwordRetype ? true : this.setState({ passwordError: 'password does not match' })
        if (terms) {
            if (this.state.passwordError === '' && this.state.emailError === '') {
                this.props.SignUpAction(firstName, lastName, email, password, day, month, year, gender)


            }
            else {

            }
        }
        else {
            alert("you didn't accept terms and conditions")
        }

    }


    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large" />)
        }
        else {
            return (
                <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5, borderBottomWidth: 4, borderBottomColor: "#dcdcdc" }}>
                    <Button
                        onPress={this.SignUpPressed.bind(this)}
                        style={Styles.ButtonTextStyle}>
                        S I G N U P
                    </Button>
                </CardSectionNoBorder>
            )
        }
    }

    render() {
        const { isSwitchOn } = this.state;

        const { dateTextStyle, ButtonTextStyle, diamond, textStyle } = Styles
        return (
            <KeyboardAvoidingView
                // adjust the value here if you need more padding
                keyboardVerticalOffset={Header.HEIGHT - 220}
                style={{ flex: 1 }}
                behavior="padding" >
                <Card >

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        <InputBB palceholder="First Name" onChangeText={this.onFirstNameChange.bind(this)} value={this.props.firstName} />
                        <InputBB palceholder="Last Name" onChangeText={this.onLastNameChange.bind(this)} value={this.props.lastName} />
                    </CardSectionNoBorder>
                    {this.renderNameError()}

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        <InputBB palceholder="EMAIL" onChangeText={this.onEmailChange.bind(this)} value={this.props.email} keyboardType={'email-address'} />
                    </CardSectionNoBorder>
                    {this.renderEmailError()}

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        <InputBB palceholder="Password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} secureTextEntry />
                    </CardSectionNoBorder>
                    {this.renderPasswordError()}

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        <InputBB palceholder="Retype Password" onChangeText={this.onPasswordRetypeChange.bind(this)} value={this.props.passwordRetype} secureTextEntry />
                    </CardSectionNoBorder>
                    {this.renderPasswordError()}

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 10, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Text style={dateTextStyle}>DATE OF BIRTH</Text>
                    </CardSectionNoBorder>

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        <InputBB palceholder="DD" onChangeText={this.onDateDayChange.bind(this)} value={this.props.day} keyboardType={'number-pad'} />
                        <InputBB palceholder="MM" onChangeText={this.onDatemonthyChange.bind(this)} value={this.props.month} keyboardType={'number-pad'} />
                        <InputBB palceholder="YYYY" onChangeText={this.onDateyearChange.bind(this)} value={this.props.year} keyboardType={'number-pad'} />
                    </CardSectionNoBorder>

                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Text style={[dateTextStyle, { flex: 2 }]}>SELECT YOUR GENDER</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Label style={[dateTextStyle, { fontSize: 15, color: this.state.maleColor, fontFamily: 'SourceSansPro' }]} onPress={this.OnmaleSelected.bind(this)}>MALE</Label>
                            <Label style={[dateTextStyle, { fontSize: 15, color: this.state.femaleColor, fontFamily: 'SourceSansPro' }]} onPress={this.OnfemaleSelected.bind(this)}> FEMALE</Label>
                        </View>
                    </CardSectionNoBorder>
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                        {this.renderGenderSelection()}
                    </CardSectionNoBorder>
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Text style={[dateTextStyle, { flex: 2 }]}>I AGREE THE TERMS OF USE</Text>
                        <Switch
                            value={isSwitchOn}
                            color="#EFB961"
                            onValueChange={_ => {
                                this.setState({ isSwitchOn: !isSwitchOn });
                                console.log(this.state.isSwitchOn)
                                this.onTermsPressed();



                            }
                            }

                        />
                    </CardSectionNoBorder>
                    {this.rendeError()}
                    {this.renderButton()}
                    <View style={diamond} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 2,


                    }}>
                        <Text style={[textStyle]}>Already a member?</Text>
                        <Label onPress={this.goSignIn.bind(this)} style={{ color: "#EFB961" }}>SIGN IN</Label>
                    </View>





                </Card>
            </KeyboardAvoidingView>
        );
    }
}
const Styles = {
    dateTextStyle: {
        color: "#999999",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 30,
        paddingLeft: 5,
        fontFamily: 'SourceSansPro'
    }, ButtonTextStyle: {
        fontFamily: 'SourceSansPro'

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
}

const mapStateToProps = ({ signup }) => {
    const { firstName, lastName, password, passwordRetype, day, month, year, gender, terms, email, loading, error } = signup;
    return { firstName, lastName, password, passwordRetype, day, month, year, gender, terms, email, loading, error };
}
export default connect(mapStateToProps, {
    lastNameChanged, firstNameChanged, passwordChangedSignUp, passwordRetypeChanged,
    dateDayChanged, dateMonthChanged, dateYearChanged, genderChanged, termsChanged, SignUpAction, emailChangedSignUp
})(SignUp);
