import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSetionStyle } = styles
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { }}>
            <View style={containerStyle}>
                <CardSection style={cardSetionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                </Button>

                    <Button onPress={onDecline}>
                        No
                </Button>
                </CardSection>
            </View>
        </Modal>
    );
};
const styles = {
    cardSetionStyle: {
        backgroundColor: "#2b2b2b",
        justifyContent: 'center',

    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        color:"white"
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',

    }
}

export { Confirm };