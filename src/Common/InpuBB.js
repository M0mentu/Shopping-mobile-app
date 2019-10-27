import React from 'react';
import { TextInput, View, Text} from 'react-native';
const InputBB = ({ label, value, onChangeText, palceholder,secureTextEntry,keyboardType }) => {
    const { inputStyle, labelStyle, containerStyle, } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            
            <TextInput
            secureTextEntry={secureTextEntry}
                placeholder={palceholder}
                placeholderTextColor= "#454545"
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}


            />
        </View>
    );
}
const styles = {

    inputStyle: {
        
        color: "#454545",
        paddingRight: 11,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight:18,
        flex: 4,
       


        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    labelStyle: {
        color: "#454545",
        fontSize: 18,
        paddingBottom: 20,
        fontFamily: 'SourceSansPro'
        
 },
    containerStyle: {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
         
    }
};
export { InputBB };