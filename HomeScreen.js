import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import Header from './components/Header';
import Footer from './components/Footer';


export default function Home({ navigation }) {


    return (

        <View style={styles.container}>

            <Header />

            <View style={styles.groupbutton}>
                <TouchableOpacity onPress={() => navigation.navigate('Android')} >
                    <Text style={styles.textButton} >Android</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('IOS')} >
                    <Text style={styles.textButton}>IOS</Text>
                </TouchableOpacity>
            </View>


            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderColor: '#074073'
    },

    groupbutton: {
        width: '80%',
        flex: 2,
        justifyContent: 'center',

    },

    textButton: {
        textAlign: 'center',
        backgroundColor: '#074073',
        color: '#fff',
        padding: 15,
        borderRadius: 8,
        margin: 25,
        fontWeight: 'bold'
    }
});