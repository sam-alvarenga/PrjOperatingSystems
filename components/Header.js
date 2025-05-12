import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (

        <View style={headerStyles.containerHeader}  >
            <StatusBar style="auto" />
            <Text style={headerStyles.titleHeader}>Sistemas Operacionais  {'\n'} Mobile📱</Text>
        </View>

    );
}

const headerStyles = StyleSheet.create({

    containerHeader: {
        width: '100%',
        height: '25%',
        backgroundColor: '#074073'
       
    },

    titleHeader: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    }
})


