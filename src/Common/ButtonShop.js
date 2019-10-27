import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonShop = ({ onPress, children, style }) => {


    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            <View style={styles.viewStyle}>

                {children}

            </View>

        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#EFB961',

    },
    
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

}
export { ButtonShop };