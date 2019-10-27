import React, { Component } from 'react'
import { Text, View, Dimensions, ScrollView } from 'react-native'
import { Header, Container, Content, Footer, Icon, Button, Row } from 'native-base'
import {Actions}from 'react-native-router-flux'
var { height, width } = Dimensions.get('window');


class Terms extends Component {
    render() {
        const { headerStyle, TextStyle } = style
        return (
            <ScrollView>
            <Container >
                <Header style={headerStyle}>
                    <View style={{ width: width - 50, justifyContent: "center" }}>
                        <Text style={TextStyle}>TERMS AND CONDITIONS</Text>
                    </View>
                    <View style={{ justifyContent: "center" }} >
                        <Icon type='Feather' name='x' onPress={_ => Actions.ordercomplete()} />
                    </View>
                </Header>
                <View style={{ flexDirection: 'row', padding: 10 }}>

                    <Text style={[TextStyle, { weight: 'bold', fontSize: 20 }]}>Privacy</Text>
                </View>

                <View style={{ flexDirection: 'row', padding: 10, paddingTop: 20 }}>
                    <Text style={[TextStyle, { flex: 1, flexWrap: 'wrap', color: "#999999" }]}>Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
Curabitur aliquet tellus ut libero posuere, ut maximus ipsum fermentum.
Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum. </Text>

                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>

                    <Text style={[TextStyle, { weight: 'bold', fontSize: 20 }]}>Payments</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, paddingTop: 20 }}>
                    <Text style={[TextStyle, { flex: 1, flexWrap: 'wrap', color: "#999999",paddingBottom:20 }]}>
                    Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
                    </Text>
                </View>
            </Container>
            </ScrollView>

        )
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

        alignSelf: 'center',
        fontFamily: "SourceSansPro",
        fontSize: 18,
        color: "#454545",

    },

}
export default Terms