import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, palceholder,secureTextEntry,keyboardType }) => {
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
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 14,
        flex:10 ,
        alignSelf: 'flex-start',

       

    },
  
    labelStyle: {
        color: "#454545",
        fontSize: 18,
        paddingLeft: 0,
        flex: 1,
 },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

      

      
    }
};
export { Input };