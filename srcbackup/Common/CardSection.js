import React from 'react';
import {View}from 'react-native';

const CardSection =(props)=>{
return(
    <View style={[styles.containerStyle,props.style]}>
        {props.children}
    </View>
);
};
const styles={
    containerStyle:{

        borderBottomWidth:0.5,
        padding:10,
        backgroundColor:'#292929',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#c544ff',
        position:'relative'
    

    },
};

export  {CardSection};