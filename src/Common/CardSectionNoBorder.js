import React from 'react';
import {View}from 'react-native';

const CardSectionNoBorder =(props)=>{
return(
    <View style={[styles.containerStyle,props.style]}>
        {props.children}
    </View>
);
};
const styles={
    containerStyle:{

        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',      
        position:'relative',
       
    

    },
};

export  {CardSectionNoBorder};