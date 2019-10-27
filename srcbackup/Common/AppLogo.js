import React from 'react';
import { View, Text, Image } from 'react-native';
const AppLogo = () => {
    return (
        <View style={{  alignItems: 'center', paddingRight: 30 }}>
            <Image source={require('../Assets/store.png')}
                style={{ height: 40 }} resizeMode={"contain"} />
        </View>
    );
};
export { AppLogo }