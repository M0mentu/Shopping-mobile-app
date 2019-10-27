import React, { Component } from 'react';
import {
    Platform, ScrollView, StyleSheet, Alert, Image, TouchableOpacity, ImageBackground, Dimensions, TextInput,
    Text, View, Modal, TouchableHighlight
} from 'react-native';
import img1 from '../../Assets/hexaSize.png'
import img2 from '../../Assets/hexaSizeFill.png'
import img3 from '../../Assets/img3.png'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Button, Icon } from 'native-base'
import Hexagon from '../../Common/Hexagon'
import { getColorAtr, getSizeAtr } from '../../Actions'
import { connect } from 'react-redux';



var { height, width } = Dimensions.get('window');


class CustomizeProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            color: "#454545",
            colors: ["#454545", "#454545", "#454545", "#454545", "#454545"],
            paths: [img1, img1, img1, img1, img1],

        };
        console.log(this.props.attributes)

    }

    AddFriend() {

        this.props.changeModalVisibility(false);
    }
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }
    select(index, size) {
        this.props.getSizeAtr(size);

        var imgs = [];
        var col = [];
        for (var i = 0; i < 5; i++) {
            if (index == i) {
                imgs[i] = img2;
                col[i] = "#fff";
            }
            else {
                imgs[i] = img1;
                col[i] = "#454545";
            }
        }

        this.setState({ paths: imgs, colors: col })
    }
    selectColor(Color, atrcolor) {
        this.props.getColorAtr(atrcolor)
        this.setState({ color: Color, atcolor: atrcolor })
    }

    renderSize() {
        const { attributes } = this.props;
        return attributes.map((atr) => {
            if (atr.attribute_name == "Size") {
                return (
                    <TouchableOpacity key={atr.attribute_value_id} onPress={() => this.select(atr.attribute_value_id - 1, atr.attribute_value)}  >
                        <ImageBackground resizeMode="contain" style={{ width: 50, height: 50, justifyContent: "center", alignItems: 'center' }} source={this.state.paths[atr.attribute_value_id - 1]} >
                            <Text style={[styles.TextStyle, { position: 'absolute', Color: this.state.colors[0], fontWeight: 'bold' }]}>{atr.attribute_value}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }
        })
    }
    renderColor() {
        const { attributes } = this.props;
        return attributes.map((atr) => {
            if (atr.attribute_name == "Color") {
                return (
                    <TouchableOpacity onPress={() => this.selectColor(atr.attribute_value.toLowerCase(), atr.attribute_value)} style={{ paddingTop: 30, paddingLeft: 10, }}  >
                        <ImageBackground resizeMode="contain" style={{ width: 65, height: 60, justifyContent: "center", alignItems: 'center' }} source={img3} >
                            <Hexagon style1={{ backgroundColor: atr.attribute_value.toLowerCase() }} style2={{ borderBottomColor: atr.attribute_value.toLowerCase() }} style3={{ borderTopColor: atr.attribute_value.toLowerCase() }} />
                        </ImageBackground>

                    </TouchableOpacity>
                )
            }
        })
    }
    render() {

        return (
            <TouchableOpacity activeOpacity={1} disabled={true} style={styles.contentContainer}  >
                <View style={[styles.modal,]} >
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'column', width: width, justifyContent: "center", alignContent: "center" }}>
                            <Text style={styles.TextStyle}>Size</Text>
                            <View style={styles.buttonsView}>
                                {this.renderSize()}
                            </View>

                        </View>

                        <View style={{ flexDirection: 'column', width: width, justifyContent: "center", alignContent: "center", paddingTop: 5 }}>
                            <Text style={[styles.TextStyle, { color: this.state.color }]}>Color</Text>
                            {/* <View style={[styles.buttonsView,{height:30}]}> */}
                            <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>

                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', }} >
                                        {this.renderColor()}
                                    </View>

                                </ScrollView>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    textView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableHighlight: {
        flex: 1,
        backgroundColor: 'rgba(62,58,59,1)',
        paddingVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
        margin: 0.5
    },
    text: {
        margin: 5,
        fontSize: 20,
        color: 'rgba(183,163,130,1)',
        // fontWeight:'bold',
        fontFamily: 'Lobster-Regular'
    },
    modal: {
        height: 200,
        paddingTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: width,

        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        backgroundColor: 'rgba(255,255,255, 0.9)',

    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-end",
        marginBottom: 70,
        backgroundColor: 'transparent',
    },
    touchstyle: {
        backgroundColor: 'rgba(116, 123, 178, 0.05)',
        height: height / 8,
        borderColor: "white",
        flexDirection: 'row',
        borderBottomWidth: 0.1,
        width: width
    },
    TextStyle: {


        fontFamily: "SourceSansPro-Light",
        fontSize: 18,
        color: "#454545",
    },
});
const mapStateToProps = ({ myshop }) => {
    const { colorAtr, getSizeAtr } = myshop;
    return { colorAtr, getSizeAtr };
}
export default connect(mapStateToProps, { getColorAtr,getSizeAtr })(CustomizeProduct)