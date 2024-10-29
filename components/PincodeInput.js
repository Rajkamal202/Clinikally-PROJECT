// PincodeInput.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const PincodeInput = ({ length = 4, onComplete }) => {
    const [pin, setPin] = useState(new Array(length).fill(''));

    const handleInputChange = (text, index) => {
        const newPin = [...pin];
        newPin[index] = text.replace(/[^0-9]/g, ''); // Allow only numeric input

        setPin(newPin);

        // Move to the next input if the current input is filled
        if (text && index < length - 1) {
            const nextInput = index + 1;
            if (nextInput < length) {
                this[`input${nextInput}`].focus(); // Focus on next input
            }
        }

        // Call onComplete if the PIN is fully entered
        if (newPin.every((d) => d !== '')) {
            onComplete(newPin.join(''));
        }
    };

    return (
        <View style={styles.container}>
            {pin.map((digit, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    value={digit}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => handleInputChange(text, index)}
                    ref={(input) => {
                        this[`input${index}`] = input; // Create a ref for each input
                    }}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    input: {
        width: 40,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 5,
    },
});

export default PincodeInput;
