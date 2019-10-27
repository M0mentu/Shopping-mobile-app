import React from 'react';
import { View,ScrollView } from 'react-native';

const Card = (props) => {
    return (
        <ScrollView style={styles.containerStyle}>
            {props.children}
        </ScrollView>
    );
};

const styles = {
    containerStyle: {
     flex:1,
    
     flexDirection: 'column', 

        
        

    }
}

export  {Card};