import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Footer() {
    return (

        <View style={footerStyles.containerFooter}>
            <StatusBar style="auto" />
            <Text style={footerStyles.textFooter}> ©Desenvolvido por Samantha Alvarenga 2025 </Text>

        </View>

    );
}

const footerStyles = StyleSheet.create({

    containerFooter: {
        width: '100%',
        flex: 0.1,
        backgroundColor:'#074073',
        justifyContent:'center',
        alignItems:'center',
    },

    textFooter: {
        fontWeight: 'bold',
        color: '#fff'       
    }
})