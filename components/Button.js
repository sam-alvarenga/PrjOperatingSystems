import React from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";



export default function Button({navigation}) {
    return (

        <View style={buttonStyles.buttonBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={buttonStyles.textBack}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )

}

const buttonStyles = StyleSheet.create({

    buttonBack: {
        width: '50%',
        alignSelf: 'center',
        margin: 25,
        padding: 10,
        backgroundColor: '#074073',
        borderRadius: 8,
    },

    textBack: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
    }
})
