import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Card, CardSectionNoBorder, ButtonShop, Spinner } from '../../Common'
import Foooter from '../../Common/Footer'
import { Footer, Icon, FooterTab, Container, Content, Button, Badge, Accordion, ScrollableTab, Tabs, Tab, Header, TabHeading } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { GetCategories, GetAllItems } from '../../Actions'
import TabPage from './TabPage'
var { height, width } = Dimensions.get('window');

class DepartmentShop extends Component {

    GoBack() {
        Actions.pop();
    }
    RenderCategories() {
        const { categories } = this.props
        return categories.map(category => {
            return (

                <Tab key={category.category_id} heading={
                    <TabHeading style={{ backgroundColor: 'transparent' }}>
                        <Text>{category.name}</Text>
                    </TabHeading>}>
                    <TabPage d_id={0} c_id={category.category_id} />
                </Tab>

            )
        })
    }

    render() {


        const { fontStyle, buttonStyle, winterText, shopNowButton, shopNowFontStyle, badgeTextStyle, badgeStyle } = style;
        const { selectedDepartment, categories, departmentColor } = this.props;
        if (selectedDepartment == 0) {

            return <Spinner size="large" />
        }
        else {
            return (


                <Container>
                    <Content>
                        <CardSectionNoBorder style={{ flex: 1, padding: 0, flexDirection: 'column' }}>
                            <ButtonShop onPress={this.GoBack.bind(this)} style={{ backgroundColor: `${departmentColor}` }}>
                                <Text style={[buttonStyle, { fontSize: 60, fontFamily: 'SourceSansPro-Light' }]}>{selectedDepartment.name.toUpperCase()}</Text>
                                <Text style={[buttonStyle, { fontFamily: 'SourceSansPro-Light', textAlign: 'center', fontSize: 18, fontWeight: "900" }]}>{selectedDepartment.description.toUpperCase()}</Text>
                            </ButtonShop>
                        </CardSectionNoBorder>

                        <Tabs transparent renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: 'transparent' }} style={{ backgroundColor: "#f2f2f2", }} />}>
                            <Tab heading={
                                <TabHeading style={{ backgroundColor: 'transparent' }}>
                                    <Text>All Products </Text>
                                </TabHeading>}>
                                <TabPage d_id={selectedDepartment.department_id} c_id={0} />
                            </Tab>
                            {this.RenderCategories()}
                        </Tabs>
                    </Content>

                    <Footer>
                        <Foooter />
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
    },


}
const mapStateToProps = ({ myshop }) => {
    const { selectedDepartment, categories, departmentColor, items } = myshop;
    return { selectedDepartment, categories, departmentColor, items };

}
export default connect(mapStateToProps, { GetCategories, GetAllItems })(DepartmentShop);