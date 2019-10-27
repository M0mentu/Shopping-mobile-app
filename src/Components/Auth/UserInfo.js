import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet, ScrollView, Dimensions, ActionSheetIOS } from 'react-native'
import { CardSectionNoBorder, InputBB, Button, Progressline, Spinner } from '../../Common'
import { Header } from 'react-navigation';
import { connect } from 'react-redux'
import {
    updateName, firstNameUpdate, lastNameUpdate, updateAddress, addressOneUpdate, addressTwoUpdate,
    cityUpdate, regionUpdate, postalUpdate, countryUpdate, GetRegions, GetShipPlans, UpdateShipPlans
} from '../../Actions'
import { Picker } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');


class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameError: '',
            addressOneError: '',
            addressTwoError: '',
            cityError: '',
            regionError: '',
            postalError: '',
            countryError: '',
            picketState: false,
            regionstate: 1,
        }
        this.props.GetRegions();

        // this.props.GetShipPlans(2).then((data)=>{
        //     alert(data);
        // })

    }
    //===========================================----------------
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
    renderAddressOneError() {
        if (this.state.addressOneError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.addressOneError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderAddressTwoError() {
        if (this.state.addressTwoError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.addressTwoError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderCityError() {
        if (this.state.cityError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.cityError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderRegionError() {
        if (this.state.regionError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.regionError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderPostalError() {
        if (this.state.postalError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.postalError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    renderCountryError() {
        if (this.state.countryError) {
            return (
                <View >
                    <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 1 }}>
                        <Text style={Styles.errortextStyle}>{this.state.countryError}</Text>
                    </CardSectionNoBorder>

                </View>
            );
        }
    }
    //===========================================

    onFirstNameChange(text) {
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
            this.setState({ nameError: 'Name only contains letters' })
            this.props.firstNameUpdate(text)
            return false;
        }
        else {
            this.setState({ nameError: '' })
            this.props.firstNameUpdate(text)
        }
    }

    //========================================---------------
    //=====================================
    onLastNameChange(text) {
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
            this.setState({ nameError: 'Name only contains letters' })
            this.props.lastNameUpdate(text)
            return false;
        }
        else {
            this.setState({ addressOneError: '' })
            this.props.lastNameUpdate(text)
        }
    }

    //========================================
    //===========================================-----------
    address1Changed(text) {
        let reg = /^[a-zA-Z0-9 ]*$/;
        if (reg.test(text) === false) {
            this.setState({ addressOneError: 'Address 1 must only contain letters and numbers' })
            this.props.addressOneUpdate(text)
            return false;
        }
        else {
            this.setState({ addressOneError: '' })
            this.props.addressOneUpdate(text)
        }
    }
    address2Changed(text) {
        let reg = /^[a-zA-Z0-9 ]*$/;
        if (reg.test(text) === false) {
            this.setState({ addressTwoError: 'Address 2 must only contain letters and numbers' })
            this.props.addressTwoUpdate(text)
            return false;
        }
        else {
            this.setState({ addressTwoError: '' })
            this.props.addressTwoUpdate(text)
        }
    }
    cityChange(text) {
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
            this.setState({ cityError: 'City  must only contain letters ' })
            this.props.cityUpdate(text)
            return false;
        }
        else {
            this.setState({ cityError: '' })
            this.props.cityUpdate(text)
        }
    }
    regionChange(text) {

        if (text == 1) {
            this.setState({ regionError: "Please select a region" })
            this.props.regionUpdate(text)
            this.setState({ regionstate: text })
            this.getShips(text)


        }
        else {

            this.setState({ regionError: '' })
            this.props.regionUpdate(text)
            this.setState({ regionstate: text })
            this.getShips(text)


        }
    }
    postalChange(text) {
        let reg = /^[0-9]*$/;
        if (reg.test(text) === false) {
            this.setState({ postalError: 'Postal  must only contain numbers ' })
            this.props.postalUpdate(text)
            return false;
        }
        else {
            this.setState({ postalError: '' })
            this.props.postalUpdate(text)
        }
    }
    countryChange(text) {
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
            this.setState({ countryError: 'Country  must only contain letters ' })
            this.props.countryUpdate(text)
            return false;
        }
        else {
            this.setState({ countryError: '' })
            this.props.countryUpdate(text)
        }
    }
    renderPicker() {
        const { getRegions } = this.props;
        return getRegions.map(data => {
            return (
                <Picker.Item label={data.shipping_region} value={data.shipping_region_id} />
            )
        })
    }
    getShips(id) {
        this.props.GetShipPlans(id)
    }
    renderPickerShipping() {
        const { shippingplans, region } = this.props;
        const { regionstate } = this.state
        console.log("shippingplans done", shippingplans)


        if (shippingplans != "") {

            return shippingplans.map((data) => {
                console.log("getshippingregions done", shippingplans)
                return (<Picker.Item label={data.shipping_type} value={data.shipping_cost+" "+data.shipping_id} />)
            })
        }
        else {
            return (false)
        }
    }
    shippingplanChange(text) {
        this.props.UpdateShipPlans(text)
    }
    //========================================-------------------
    updateData() {
        const { user, firstName, lastName, addressOne
            , addressTwo
            , city
            , region
            , postalCode
            , Country
            , shippingplan
        } = this.props;

        const { nameError, addressOneError, addressTwoError
            , cityError
            , regionError
            , postalError
            , countryError } = this.state

        if (nameError != '' || firstName == null || lastName == null || addressOneError != '' || addressOne == null
            || addressTwoError != '' || addressTwo == null || cityError != '' || city == null
            || postalError != '' || postalCode == null || countryError != '' || Country == null
            || regionError != '' || region == 1 || shippingplan == '') {
            console.log('if', this.state)
            if (firstName == '' || lastName == '') {
                this.setState({ nameError: 'please enter first and last name ' })
            }
            if (addressOne == null) {
                console.log(addressOne)
                this.setState({ addressOneError: 'please enter address 1 ' })
            }
            if (addressTwo == null) {
                this.setState({ addressTwoError: 'please enter address 2 ' })
            }
            if (city == null) {
                this.setState({ cityError: 'please enter city name ' })
            }

            if (Country == null) {
                this.setState({ countryError: 'please enter country  ' })
            }
            if (postalCode == null) {
                this.setState({ postalError: 'please enter postal code  ' })
            }
            if (region == 1) {
                this.setState({ regionError: 'please select region' })
            }
            if (shippingplan == '') {
                alert("please choose shipping plan ")
            }
        }
        else {
            console.log('else')

            const userInfo = {
                addressOne
                , addressTwo
                , city
                , region
                , postalCode
                , Country
            }
            this.setState({ nameError: '' })
            this.props.updateName(firstName + " " + lastName, this.props.user).then(() => {
                this.props.updateAddress(userInfo).then(() => {

                    Actions.paymentpage();
                })
            })



        }
    }

    renderEmptyPicker() {
        const { shippingplans } = this.props
        if (shippingplans == "") {
            return "please select a region"
        }
        else {
            return "Seclect Shipping plan"
        }
    }

    render() {
        console.log("constructor", this.props, this.state.regionstate)

        if (this.props.getRegions.length > 0) {
            return (
                <KeyboardAvoidingView
                    // adjust the value here if you need more padding
                    keyboardVerticalOffset={Header.HEIGHT - 220}
                    style={{ flex: 1 }}
                    behavior="padding" >
                    <ScrollView>

                        <Progressline />

                        <View style={{ flex: 1, flexDirection: 'column' }} >
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="FIRST NAME" onChangeText={this.onFirstNameChange.bind(this)} value={this.props.firstName} />
                                <InputBB palceholder="LAST NAME" onChangeText={this.onLastNameChange.bind(this)} value={this.props.lastName} />
                            </CardSectionNoBorder>
                            {this.renderNameError()}

                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="ADDRESS 1" onChangeText={this.address1Changed.bind(this)} value={this.props.addressOne} />
                            </CardSectionNoBorder>
                            {this.renderAddressOneError()}
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="ADDRESS 2" onChangeText={this.address2Changed.bind(this)} value={this.props.addressTwo} />
                            </CardSectionNoBorder>
                            {this.renderAddressTwoError()}
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="City" onChangeText={this.cityChange.bind(this)} value={this.props.city} />
                            </CardSectionNoBorder>
                            {this.renderCityError()}
                            {/* <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                            <InputBB palceholder="Region" onChangeText={this.regionChange.bind(this)} value={this.props.region} />
                        </CardSectionNoBorder> */}
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <Picker
                                    note={false}
                                    mode="dropdown"
                                    selectedValue={this.props.region}
                                    placeholder="Select your region"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    style={{ width: undefined, borderWidth: 0 }}

                                    onValueChange={this.regionChange.bind(this)}
                                >

                                    {this.renderPicker()}
                                </Picker>
                            </CardSectionNoBorder>
                            {this.renderRegionError()}
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <Picker
                                    note={false}
                                    mode="dropdown"
                                    selectedValue={this.props.shippingplan}
                                    placeholder="Select your shipping plan"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    style={{ width: undefined }}
                                    onValueChange={this.shippingplanChange.bind(this)}

                                >
                                    <Picker.Item label={this.renderEmptyPicker()} value={''} />
                                    {this.renderPickerShipping()}
                                </Picker>
                            </CardSectionNoBorder>


                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="Postal" onChangeText={this.postalChange.bind(this)} value={this.props.postalCode} />
                            </CardSectionNoBorder>
                            {this.renderPostalError()}
                            <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5 }}>
                                <InputBB palceholder="Country" onChangeText={this.countryChange.bind(this)} value={this.props.Country} />
                            </CardSectionNoBorder>
                            {this.renderCountryError()}


                        </View>
                        <CardSectionNoBorder style={{ backgroundColor: '#ffff', paddingTop: 5, borderBottomWidth: 4, borderBottomColor: "#dcdcdc" }}>
                            <Button
                                onPress={_ => this.updateData()}
                                style={{
                                    fontFamily: 'SourceSansPro'
                                }}>
                                SAVE AND CONTINUE
                    </Button>
                        </CardSectionNoBorder>
                    </ScrollView>
                </KeyboardAvoidingView>

            )
        }
        else {
            return <Spinner size="large" />
        }
    }
}
const Styles = StyleSheet.create({
    errortextStyle: {

        color: '#b30004',
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: '300',

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
})
const mapStateToProps = ({ auth, myshop }) => {

    const { user, firstName, lastName, addressOne
        , addressTwo
        , city
        , region
        , postalCode
        , Country
        , getRegions
        , shippingplan
        , shippingplans
    } = auth;

    return {
        user,
        firstName, lastName, addressOne
        , addressTwo
        , city
        , region
        , postalCode
        , Country
        , getRegions
        , shippingplan
        , shippingplans
    };
}
export default connect(mapStateToProps, {
    GetShipPlans, UpdateShipPlans, updateName, firstNameUpdate, lastNameUpdate,
    addressOneUpdate, GetRegions, addressTwoUpdate, updateAddress, cityUpdate, regionUpdate, postalUpdate, countryUpdate
})(UserInfo)