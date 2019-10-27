
import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, StyleSheet, FlatList, ScrollView, ToastAndroid } from 'react-native';
import { Card, CardSectionNoBorder, ButtonShop, Spinner } from '../../Common'
import Foooter from '../../Common/Footer'
import {
    Icon, FooterTab, Container, Content, Button, Badge, Accordion, Footer, Row,
    ListItem, Thumbnail, Left, Body, Right, Picker
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { getTotalAmount, GetAttributes, AddToCart, updateQuantity, getItems } from '../../Actions'

import CustomizeProduct from '../Shop/CustomizeProduct';
import Modal from "react-native-modal";
import { getCartID, getID } from '../../Helper';
import { thisExpression } from '@babel/types';

var { height, width } = Dimensions.get('window');

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            temp: [],
            temp2: [],
            currentItem: [],
            totalMoeny: 0

        }
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        };
        this.props.getTotalAmount();
        this.props.getItems();

    }
    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool });
    }

    toggleModal = (str, item) => {

        const { colorAtr, sizeAtr } = this.props
        console.log("wewewew", item)
        if (str != undefined) {
            this.setState({ currentItem: item })
            this.setState({ temp: str, temp2: item })
            console.log("toogle str", str[4])
            this.props.GetAttributes(str[4])
                .then(() => {
                    this.setState({ isModalVisible: !this.state.isModalVisible });
                })
        }
        else if (colorAtr != '' || sizeAtr != '') {
            const { temp, temp2 } = this.state
            this.setState({ isModalVisible: !this.state.isModalVisible });
            getID().then((data) => {
                getCartID(data.customer_id).then((data) => {
                    console.log("toogle", temp2)
                    this.props.updateQuantity(temp2.item_id, temp2.quantity - 1).then(() => {
                        console.log("add to card d5l");
                        this.props.AddToCart(data, temp[4], colorAtr + " " + sizeAtr + " " + temp[2] + " " + temp[3] + " " + temp[4])
                        ToastAndroid.showWithGravityAndOffset(
                            'Item updated succesffuly',
                            ToastAndroid.LONG,
                            ToastAndToastroid.BOTTOM,
                            25,
                            50,
                        )
                    })
                })
            })

        }
        else {
            this.setState({ isModalVisible: !this.state.isModalVisible });

        }


    };
    plusQuantity(item) {
        this.props.updateQuantity(item.item_id, item.quantity + 1).then(() => {
            this.props.getItems();
            this.props.getTotalAmount();

        })
    };
    minusQuantity(item) {
        this.props.updateQuantity(item.item_id, item.quantity - 1).then(() => {
            this.props.getItems();
            this.props.getTotalAmount();
        })

    }
    renderItem = (item) => {

        console.log("renderItem", item, this.state.currentItem)
        if (item.length != 0) {
            let str = item.attributes.split(" ");
            return (
                <View style={{ flexDirection: 'row', height: 100, borderBottomWidth: 1, borderBottomColor: '#bfbfbf', borderTopWidth: 1, borderTopColor: "#bfbfbf" }}>

                    <Left>
                        <Thumbnail large square source={{ uri: `https://mobilebackend.turing.com/images/products/${str[3]}` }} />
                    </Left>
                    <View >
                        <Text style={style.cartTextStyle}>{item.name.toUpperCase()}</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10, }}>

                            <Text style={[style.textStyle, { color: "#454545", fontWeight: 'bold', fontSize: 15 }]}>${item.price.toUpperCase()}  </Text>
                            <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>${str[2].toUpperCase()}  </Text>
                            <View style={[style.diamond, { backgroundColor: str[0].toLowerCase() }]}></View>
                            <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>  {str[1].toUpperCase()}  </Text>

                            <TouchableOpacity onPress={() => this.plusQuantity(item)} >
                                <Icon type='Feather' name='plus' style={{ fontSize: 15, color: "#999999" }} />
                            </TouchableOpacity>
                            <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>  {item.quantity}  </Text>
                            <TouchableOpacity onPress={() => this.minusQuantity(item)} >
                                <Icon type='Feather' name='minus' style={{ fontSize: 15, color: "#999999" }} />
                            </TouchableOpacity>


                        </View>
                    </View>
                    <Right>

                        <Button onPress={() => this.toggleModal(str, item)} transparent>
                            <Icon type='Feather' name='edit' style={{ color: "#999999" }} />
                        </Button>

                    </Right>
                </View>
            )
        }
        else {
            return (
                false
            )

        }

    }

    renderShipping() {
        const { shippingplan } = this.props;
        if (shippingplan == '') {

            return (
                <Text style={[style.textStyle, { fontSize: 15, color: '#999999', textAlign: 'right', flex: 1 }]}>please choose shipping plan  </Text>
            )
        }
        else {
let x=shippingplan.split(" ")
            return (
                <Text style={[style.textStyle, { fontSize: 15, color: '#999999', textAlign: 'right', flex: 1 }]}>{x[0]} </Text>
            )

        }

    }


    renderItems = ({ item }) => {
        console.log('eeeehhhhhhhh', item)
        let str = item.attributes.split(" ");
        return (
            <View style={{ flexDirection: 'row', height: 100, borderBottomWidth: 1, borderBottomColor: '#bfbfbf' }}>
                <Left>
                    <Thumbnail large square source={{ uri: `https://mobilebackend.turing.com/images/products/${str[3]}` }} />
                </Left>
                <View >
                    <Text style={style.cartTextStyle}>{item.name.toUpperCase()}</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 10, }}>

                        <Text style={[style.textStyle, { color: "#454545", fontWeight: 'bold', fontSize: 15 }]}>${item.price.toUpperCase()}  </Text>
                        <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>${str[2].toUpperCase()}  </Text>
                        <View style={[style.diamond, { backgroundColor: str[0].toLowerCase() }]}></View>
                        <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>  {str[1].toUpperCase()}  </Text>

                        <TouchableOpacity onPress={() => this.plusQuantity(item)} >
                            <Icon type='Feather' name='plus' style={{ fontSize: 15, color: "#999999" }} />
                        </TouchableOpacity>
                        <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>  {item.quantity}  </Text>
                        <TouchableOpacity onPress={() => this.minusQuantity(item)} >
                            <Icon type='Feather' name='minus' style={{ fontSize: 15, color: "#999999" }} />
                        </TouchableOpacity>


                    </View>
                </View>
                <Right>

                    <Button onPress={() => this.toggleModal(str, item)} transparent>
                        <Icon type='Feather' name='edit' style={{ color: "#999999" }} />
                    </Button>

                </Right>
            </View>
        )
    }
    RenderTotal(){
        if(this.props.shippingplan==''){
            return this.props.totalAmount.total_amount
        }
        else{
            let xa=this.props.shippingplan.split(" ")
            let x=parseFloat( this.props.totalAmount.total_amount)
            let y=parseFloat(xa[0])
            let sum =x+y
            return sum
        }
    }
    keyExtractor = (item, index) => item.item_id;
    render() {
        const { ContentcontainerStyle, containerStyle, textStyle, innerBoxWhite, outtergrey } = style;
        const { cartCount, cartItems, attributes } = this.props;
        console.log('cart props', this.props,this.state.totalMoeny)
        if (cartItems.length > 0 ) {
            return (
                <Container  >
                    <Content contentContainerStyle={{ flex: 1, }} >
                        <View style={{ flex: 0.5, flexDirection: 'row', padding: 10, }}>
                            <View style={{ flex: 2 }}>
                                <Text style={[textStyle, { fontWeight: '400', fontSize: 18 }]}>
                                    you have <Text style={[textStyle, { color: "#f3b453", fontWeight: '400', fontSize: 18 }]}>3 items{'\n'}</Text>
                                    in your inventory.
                        </Text>
                            </View>
                            <Button onPress={_ => Actions.userinfo()} style={{ backgroundColor: "#f3b453", alignSelf: 'stretch', justifyContent: 'center', flex: 3 }}><Text style={[textStyle, { fontWeight: '700', color: "#fff", fontSize: 18 }]}>CHECKOUT</Text></Button>
                        </View>

                        <View style={{ flex: 3, borderTopWidth: 2, borderTopColor: "#BFBFBF" }}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.props.cartItems}
                                renderItem={this.renderItems}
                                viewabilityConfig={this.viewabilityConfig}

                            />

                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row', backgroundColor: '#f2f2f2', borderBottomWidth: 1, borderBottomColor: '#BFBFBF' }}>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={[style.textStyle, { fontSize: 18, textAlign: 'left' }]}>Subtotal</Text>
                                <Text style={[style.textStyle, { fontSize: 18, textAlign: 'left' }]}>Shipping</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={[style.textStyle, { fontSize: 18, textAlign: 'right' }]}>${this.props.totalAmount.total_amount}</Text>
                                <Text style={[style.textStyle, { fontSize: 18, textAlign: 'right' }]}>{this.renderShipping()}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f2f2f2' }}>
                            <Text style={[style.textStyle, { fontSize: 30, color: '#454545', textAlign: 'left', flex: 1 }]}>Total</Text>
                            <Text style={[style.textStyle, { fontSize: 30, color: '#454545', textAlign: 'right', flex: 1 }]}>${  this.RenderTotal()}</Text>

                        </View>

                        <Modal style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                            backgroundColor: "#ffff"
                        }} animationType='slide' transparent={false} visible={this.state.isModalVisible} onRequestClose={() => this.toggleModal()} onBackdropPress={() => this.toggleModal()}>
                            <View style={{ flexDirection: 'column', height: height - 390, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginTop: height - 410, position: 'absolute' }}> EDIT ITEM  </Text>
                                <View style={[style.diamond, { backgroundColor: "#f3b453", width: 10, height: 10, marginTop: height - 395 }]} />
                            </View>




                            {this.renderItem(this.state.currentItem)}

                            <CustomizeProduct changeModalVisibility={this.changeModalVisibility} attributes={this.props.attributes} />


                        </Modal>
                    </Content>

                    <Footer>
                        <Foooter />
                    </Footer>

                </Container>
            )
        }
        else {
            return (
                <Container  >
                    <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <View style={innerBoxWhite}>
                            <View style={outtergrey}>
                                <Icon active type="Feather" name="shopping-bag" style={{ fontSize: 50, color: 'darkgrey', alignSelf: 'center' }} />
                                <Text style={textStyle}> You have no items in your</Text>
                                <Text style={textStyle}>Shopping bag</Text>
                            </View>
                        </View>
                    </Content>
                    <Footer>
                        <Foooter />
                    </Footer>
                </Container>

            )
        }
    }
}
const style = StyleSheet.create({
    innerBoxWhite: {
        height: 200,
        backgroundColor: "#ffff",
        width: width - 50,
        borderRadius: 10,
        borderColor: "#c2c2c2",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outtergrey: {
        height: 190,
        backgroundColor: "#f2f2f2",
        width: width - 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ContentcontainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: "#888888",
        fontFamily: "SourceSansPro",
        fontSize: 25,
        fontWeight: "300",
        textAlign: 'center',
    },
    cartTextStyle: {
        fontFamily: "SourceSansPro-Light",
        fontSize: 25,
        fontWeight: '400',
        color: "#454545",
    },
    diamond: {
        width: 5,
        height: 5,
        alignSelf: 'center',


        backgroundColor: '#cccccc',
        transform: [
            { rotate: '45deg' }
        ]
    },

})
const mapStateToProps = ({ myshop, auth }) => {
    const { user, shippingplan, shippingplans } = auth
    const { cartCount, cartItems, attributes, totalAmount, colorAtr, sizeAtr, quantity, } = myshop;
    return { cartCount, cartItems, attributes, totalAmount, colorAtr, sizeAtr, quantity, user, shippingplan, shippingplans };
}
export default connect(mapStateToProps, { getTotalAmount, GetAttributes, AddToCart, updateQuantity, getItems })(Cart)