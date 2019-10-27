import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { Progressline, Spinner } from '../../Common/'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { DeleteCart, getTotalAmount } from '../../Actions'
import { Actions } from 'react-native-router-flux'
var { height, width } = Dimensions.get('window');

class OrderComplete extends Component {
    constructor(props) {
        super(props)
           

     
    }
    render() {
        if (this.props.orderData != "") {
            return (
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: "#fff" }}>
                    <View style={{ flex: 1 }} >
                        <Progressline style1={{ backgroundColor: "#cccccc" }} style2={{ backgroundColor: "#cccccc" }} style3={{ backgroundColor: "#efb961" }} />
                    </View>
                    <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#bfbfbf" }}>
                        <Image resizeMode={'contain'} source={require('../../Assets/buttoncheck.png')} style={{ flex: 1, height: 80 }} />
                        <Text style={[style.textStyle, { flex: 1, paddingTop: 10 }]}>Thank You</Text>
                        <Text style={[style.textStyle, { flex: 1, flexWrap: "wrap", fontSize: 18, textAlign: 'center', padding: 10, paddingTop: 20, }]}
                        >We’ve sent you an email with all the details of your order. You can track your shipment
                                               with the order id below.
                           </Text>
                        <View style={{ flex: 1, paddingBottom: 20 }}>
                            <View style={{ width: width * 0.80, height: 60, backgroundColor: '#f2f2f2', justifyContent: 'center', alignContent: 'center' }} >
                                <Text style={[style.textStyle, { textAlign: 'center', fontSize: 25 }]}>{this.props.orderData.orderId}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 1.5, backgroundColor: "#f2f2f2", justifyContent: 'center', alignItems: 'center' }}>
                        <Button onPress={_ => Actions.shopmain({ type: 'reset' })} style={{ width: width * 0.45, alignItems: 'center', justifyContent: 'center', backgroundColor: "#454545" }}><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff', textAlign: 'center' }}>BACK TO SHOP </Text></Button>
                    </View>
                </View>
            )
        }
        else {
            return (<View>
                <Text style={style.textStyle}>Processing Order</Text>
                <Spinner size />
            </View>)
        }
    }
}

const style = StyleSheet.create({
    textStyle: {
        fontFamily: 'SourceSansPro',
        fontSize: 40,
        fontWeight: "300",
        color: '#454545'
    }
})
const mapStateToProps = ({ auth }) => {
    const { orderData } = auth
    return { orderData };
}
export default connect(mapStateToProps, { DeleteCart, getTotalAmount })(OrderComplete)