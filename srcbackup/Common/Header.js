import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor:'#2b2b2b',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddinTop:15,
        elevation: 10,
    },
    textStyle: {
        fontSize: 22,
        color:'white'
        
    }
}

export { Header};
