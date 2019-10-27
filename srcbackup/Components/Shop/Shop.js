import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions  } from 'react-native';
import { Card, CardSectionNoBorder, ButtonShop, Spinner } from '../../Common'
import Foooter from '../../Common/Footer'
import { Footer, Icon, FooterTab, Container, Content, Button, Badge, Accordion,Header } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { getDepartment,GetCategories,getItems,GetUserData } from '../../Actions';
import { connect } from 'react-redux'

var { height, width } = Dimensions.get('window');

class Shop extends Component {
    constructor(props) {
        super(props)
        this.props.getDepartment();
        this.state = {
            colors: ['#CA6F1E', '#7D3C98', '#2E86C1']
        }
        this.props.GetUserData()
        this.props.getItems()

    }
  
    departmentPress(department,color) {
        this.props.GetCategories(department,color).then(()=>{Actions.departmentshop();})
    }
    _onHomePress() {
        alert("home pressed");
    }
    shopNowPressed() {
        alert("ShopNow Pressed")
    }
    renderDepartments() {
        const { departments,departmentColor } = this.props
        const { colors } = this.state

        return departments.map(department => {
            return (
                <CardSectionNoBorder key={department.department_id} style={{ flex: 1, padding: 0, flexDirection: 'column' }}>
                    <ButtonShop onPress={_ => this.departmentPress(department,colors[department.department_id-1])} style={{ backgroundColor: colors[department.department_id - 1] }}>

                        <Text style={[style.buttonStyle, { fontSize: 60, fontFamily: 'SourceSansPro-Light' }]}>{department.name.toUpperCase()}</Text>
                        <Text style={[style.buttonStyle, { fontFamily: 'SourceSansPro-Light', textAlign: 'center', fontSize: 18, fontWeight: "900" }]}>{department.description.toUpperCase()}</Text>

                    </ButtonShop>
                </CardSectionNoBorder>
            );

        });

    }
    render() {
        const { loading } = this.props
        if (loading) {


            return (
                <Spinner size='large' />
            )

        }

        else {
            console.log(this.props.departments[0]['name']);

            const { fontStyle, buttonStyle, winterText, shopNowButton, shopNowFontStyle, badgeTextStyle, badgeStyle } = style;
            return (

                <Container>
                 
                    <Content >

                        <CardSectionNoBorder style={{ backgroundColor: '#454545', padding: 20, flex: 1, }}>
                            <Text style={[fontStyle, { color: '#f3b453' }]}>LAST CHANCE!</Text>
                            <Text style={[fontStyle, { fontSize: 15 }]}> Holiday shipping ends soon.</Text>
                            <Text style={[fontStyle, { color: '#f3b453' }]}>  SHOP NOW</Text>
                        </CardSectionNoBorder>
                        {this.renderDepartments()}











                        <CardSectionNoBorder style={{ flex: 1, padding: 0, backgroundColor: "#fff" }}>
                            <ImageBackground source={require('../../Assets/snowflakes.png')} style={{ width: 350, height: 100 }} resizeMode={"contain"}>
                                <Text style={winterText}>WINTER SALE</Text>
                                <Text style={[winterText, { fontWeight: "300", fontSize: 40, fontFamily: 'SourceSansPro-Light' }]}>UP TO 60% OFF</Text>

                            </ImageBackground>
                        </CardSectionNoBorder>

                        <CardSectionNoBorder style={{ padding: 0, backgroundColor: "#fff" }}>


                            {/* <ImageBackground source={require('../../Assets/blank.png')} style={{ width: 350, height: 250 }} resizeMode={'contain'}> */}
                            <View style={{ backgroundColor: "#f2f2f2", width: width - 30, height: height / 4, margin: 25 }}>
                                <Button onPress={this.shopNowPressed.bind(this)} style={shopNowButton}>
                                    <Text style={shopNowFontStyle}>SHOP NOW</Text>
                                </Button>
                            </View>
                            {/* </ImageBackground> */}
                        </CardSectionNoBorder>

                    </Content>

                    <Footer  >

                       <Foooter/>

                    </Footer>

                </Container>

            )
        }
    }
}
const style = {
    fontStyle: {
        fontFamily: "SourceSansPro",
        fontSize: 18,

        color: '#fff'
    },
    buttonStyle: {
        fontFamily: "SourceSansPro",
        fontSize: 30,
        alignSelf: 'center',

        color: '#fff'
    },
    winterText: {
        color: '#454545',
        fontFamily: 'SourceSansPro',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    linearGradient: {
        flex: 1,


    },
    shopNowButton: {
        backgroundColor: "#f3b453",
        width: 130,
        height: 36,
        marginTop: (height / 8) - 18,
        position: 'absolute',
        marginLeft: width - 130,
        justifyContent: 'center',
        alignContent: 'center',
    },
    shopNowFontStyle: {
        color: '#ffffff',
        fontFamily: "SourceSansPro",
        fontSize: 18,
        fontWeight: '700',
    },
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
    const { departments, loading, selectedDepartment,departmentColor} = myshop;
    return { departments, loading, selectedDepartment,departmentColor };
}
export default connect(mapStateToProps, { getDepartment,GetCategories,getItems,GetUserData })(Shop);