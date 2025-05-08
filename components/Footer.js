import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (

        <View style={styles.containerFooter}>
            <StatusBar style="auto" />
            <Text style={styles.textFooter}> Desenvolvido por Samantha </Text>

        </View>

    );
}

const styles = StyleSheet.create({

    containerFooter: {
        width: '100%',
        flex: 0.25,
        backgroundColor:'#074073',
        justifyContent:'center',
        alignItems:'center',
    },

    textFooter: {
        fontWeight: 'bold',
        color: '#fff'

        
    }
})