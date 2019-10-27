import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress,children,style}) => {
   

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle,style]}>
            <Text style={styles.textStyle}>
                {children}
                </Text>
        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {

        flex:1, 
       
        alignSelf: 'stretch',
        backgroundColor: '#EFB961',
    
    },
    textStyle: {
   
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 20,
        paddingBottom: 20,
    }

}
export { Button };