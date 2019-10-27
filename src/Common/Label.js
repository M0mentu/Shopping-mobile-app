import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Label = ({onPress,children,style}) => {
    const { TextStyle,containerStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[containerStyle]} >
            <Text style={[TextStyle,style]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    TextStyle: {


        color: '#454545',
        fontSize: 18,
        fontWeight: '600',
    },
    containerStyle: {
 
     
      
        marginLeft: 5,
        marginRight: 5,
       
    }

}

export { Label };