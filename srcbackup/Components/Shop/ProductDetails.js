import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Spinner } from '../../Common'
import { Actions } from 'react-native-router-flux'
import { AddToCart, GenerateCart, userDecoded, GetAttributes } from '../../Actions'
import { Header, Container, Content, Footer, Icon, Button } from 'native-base'
import { SliderBox } from 'react-native-image-slider-box';
import Modal from "react-native-modal";
import CustomizeProduct from './CustomizeProduct';
import { getID, getCartID } from '../../Helper';
import { GET_USER_ID } from '../../Actions/types'


var { height, width } = Dimensions.get('window');

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,

        }
        this.props.GetAttributes(this.props.product.product_id);
        getID().then((data) => {
            this.props.userDecoded(data);
        })
    }
    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool });
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    addItemToCart = (product_ID) => {
        const { user_data, colorAtr, sizeAtr, product } = this.props
        if (colorAtr != '' && sizeAtr != '') {
            console.log("ifff", colorAtr, sizeAtr)

            getCartID(user_data.customer_id).then((data) => {
                console.log('data after pressing generate', data)

                if (data == null) {
                    this.props.GenerateCart(user_data.customer_id).then((cartId) => {
                        this.props.AddToCart(cartId, product_ID,colorAtr+" "+sizeAtr+" "+product.discounted_price+" "+product.image+" "+product.product_id)

                    })
                }
                else {
                    getCartID(user_data.customer_id).then((data) => {
                        console.log("else", data, product_ID)
                        this.props.AddToCart(data, product_ID, colorAtr+" "+sizeAtr+" "+product.discounted_price+" "+product.image+" "+product.product_id)
                    })


                }
            })
        }
        else (
            ToastAndroid.showWithGravityAndOffset(
                'Please select Color and Size from customize',
                ToastAndroid.LONG,
                ToastAndToastroid.BOTTOM,
                25,
                50,
            )
        )


    }
    render() {
        const { headerStyle, TextStyle, footerStyle, shopNowFontStyle, buttonStyle } = style
        const { product, user_data, cartId } = this.props

        if (this.props.product == '') {
            return (<Spinner size="large" />)
        }
        else {
            return (
                <Container>
                    <Header style={headerStyle}>
                        <View style={{ width: width - 50, justifyContent: "center" }}>
                            <Text style={TextStyle}>{product.name}</Text>
                        </View>
                        <View style={{ justifyContent: "center" }} >
                            <Icon type='Feather' name='x' onPress={_ => Actions.departmentshop()} />
                        </View>
                    </Header>
                    <Content>

                        <SliderBox
                            images={[`https://mobilebackend.turing.com/images/products/${product.image}`, `https://mobilebackend.turing.com/images/products/${product.image_2}`]}
                            sliderBoxHeight={height / 2}

                            dotColor="#efb961"
                            inactiveDotColor="#d8d8d8"
                            paginationBoxStyle={{
                                position: 'absolute',
                                bottom: 0,
                                paddingTop: 0,
                                alignItems: 'center',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                paddingVertical: 10
                            }}

                            dotStyle={{

                                position: 'absolute',
                                width: 10,
                                height: 10,
                                marginHorizontal: 0,
                                padding: 0,

                                marginTop: 0,
                                transform: [
                                    { rotate: '45deg' }
                                ]

                            }}
                        />
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[TextStyle, { backgroundColor: "#f2f2f2", margin: 25 }]}> {product.description}</Text>
                        </View>
                    </Content>
                    <Modal style={{
                        margin: 0, alignItems: undefined,
                        justifyContent: undefined,
                    }} animationType="slide" transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.toggleModal()} onBackdropPress={() => this.toggleModal()}>

                        <CustomizeProduct changeModalVisibility={this.changeModalVisibility} attributes={this.props.attributes} />
                    </Modal>
                    <View style={footerStyle}>
                        <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: "#cccccc", alignItems: 'center', flex: 1 }}>
                            <TouchableOpacity onPress={_ => this.toggleModal()} style={{ alignContent: 'center', alignItems: 'center' }}>
                                <Icon type='FontAwesome' name='sort-up' />
                                <Text style={TextStyle}>Customize</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row', borderRightWidth: 1, borderRightColor: "#cccccc", flex: 2.5 }}>
                            <View style={{ flexDirection: 'column', flex: 1, marginTop: 5, marginBottom: 5, justifyContent: 'center' }}>
                                <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} >    ${product.discounted_price}</Text>
                                <Text style={[style.TextStyle, { fontWeight: 'bold', fontSize: 20 }]} >${product.price}</Text>
                            </View>
                            <View style={{ flex: 2, marginTop: 5, marginBottom: 5 }}>
                                <Button onPress={_ => this.addItemToCart(product.product_id)} style={buttonStyle}><Text style={shopNowFontStyle}>ADD TO CART</Text></Button>

                            </View>
                        </View>
                    </View>


                </Container>
            )
        }
    }
}
const style = {
    headerStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        borderBottomWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        androidStatusBarColor: '#f2f2f2'

    },
    TextStyle: {


        fontFamily: "SourceSansPro-Light",
        fontSize: 18,
        color: "#454545",
    },
    footerStyle: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderTopWidth: 1,
        borderTopColor: "#cccccc"


    },
    buttonStyle: {
        backgroundColor: "#f3b453",

        alignSelf: 'stretch',
        justifyContent: 'center',


    },
    shopNowFontStyle: {
        color: '#ffffff',
        fontFamily: "SourceSansPro",
        fontSize: 18,
        fontWeight: '700',
    },

}
const mapStateToProps = ({ myshop }) => {
    const { product, cartId, user_data, attributes, colorAtr, sizeAtr } = myshop;
    return { product, cartId, user_data, attributes, colorAtr, sizeAtr };
}
export default connect(mapStateToProps, { AddToCart, GenerateCart, userDecoded, GetAttributes })(ProductDetails);