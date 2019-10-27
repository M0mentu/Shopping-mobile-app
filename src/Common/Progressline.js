import React from 'react';
import { View, Text } from 'react-native';
const Progressline = ({style1,style2,style3}) => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff',borderBottomWidth: 1, borderBottomColor: "#c4c4c4" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                <Text>ADDRESS</Text>
                <Text>PAYMENT</Text>
                <Text>REVIEW</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, paddingTop: 10,  }}>
                <View style={[Styles.diamond,style1]} />
                <View style={[Styles.diamond,style2]} />
                <View style={[Styles.diamond,style3]} />
            </View>

        </View>
    );
};
const Styles ={
  
    diamond: {
        width: 10,
        height: 10,
        alignSelf: 'center',


        backgroundColor: '#efb961',
        transform: [
            { rotate: '45deg' }
        ]
    },
}
export{Progressline}