
import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Card, CardSectionNoBorder, ButtonShop, Spinner } from '../Common'
import { Footer, Icon, FooterTab, Container, Content, Button, Badge, Accordion } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getItemsNumber } from '../Actions'
var { height, width } = Dimensions.get('window');


class Foooter extends Component {
    getItemsCount() {
        let c = 0
        const { cartItems } = this.props
        console.log("cartttttttttttt", cartItems)
        if (cartItems.length == 0) {
            return (true)
        }

        else {
            cartItems.map((items) => {
                c += items.quantity
            })
            this.props.getItemsNumber(c)

            return (
                [
                    <Badge style={[style.badgeStyle, { position: 'absolute', marginTop: 15, marginLeft: 45, borderWidth: 3, borderColor: "#454545" }]}><Text style={style.badgeTextStyle}>{c}</Text></Badge>,
                    <Badge style={[style.badgeStyle, { position: 'absolute', marginTop: 15, marginLeft: 45 }]}><Text style={style.badgeTextStyle}>{c}</Text></Badge>
                ]
            )
        }
    }

    render() {
        return (
            <Container>
                <Footer>
                    <LinearGradient colors={['#FFFFFF', '#DEDEDE']} style={{ flex: 1 }}>
                        <FooterTab style={{ backgroundColor: "transparent", borderTopWidth: 1, borderTopColor: "#c4c4c4" }}>

                            <Button>
                                <Icon type="Feather" name="hexagon" style={{ color: "#454545" }} />
                                <Text>Shop</Text>

                            </Button>
                            <Button>
                                <Icon type="Feather" name="sun" style={{ color: "#454545" }} />
                                <Text>Inspiration</Text>
                            </Button>

                            <TouchableOpacity onPress={_ => Actions.cart()}>

                                <LinearGradient colors={['#FFFFFF', '#DEDEDE', '#dadada']} style={{ height: 90, width: 100, bottom: 44, alignContent: "center", borderWidth: 3, borderColor: 'lightgrey', borderRadius: 65, backgroundColor: '#f5f5f5' }}>
                                    <Icon active type="Feather" name="shopping-bag" style={{ color: 'darkgrey', alignSelf: 'center', paddingTop: 31 }} />
                                    {this.getItemsCount()}

                                </LinearGradient>
                            </TouchableOpacity>
                            <Button >

                                <Icon type="Feather" name="map-pin" style={{ color: "#454545" }} />
                                <Text>Store</Text>

                            </Button>
                            <Button>
                                <Icon type="Feather" name="more-horizontal" style={{ color: "#454545" }} />
                                <Text>More</Text>

                            </Button>
                        </FooterTab>
                    </LinearGradient>
                </Footer>
            </Container>
        )
    }
}
const style = {
    badgeTextStyle: {
        color: "#fff",
        fontFamily: "SourceSansPro",
        fontWeight: 'bold',
    },
    badgeStyle: {
        backgroundColor: '#454545',
        borderWidth: 3,
        borderColor: "#ebebeb"
    }
}
const mapStateToProps = ({ myshop }) => {
    const { cartItems } = myshop
    return { cartItems };
}
export default connect(mapStateToProps, { getItemsNumber })(Foooter)