import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (

        <View style={styles.containerHeader}  >
            <StatusBar style="auto" />
            <Text style={styles.titleHeader}>Sistemas Operacionais {'\n'} Mobile </Text>
        </View>

    );
}

const styles = StyleSheet.create({

    containerHeader: {
        position: 'absolute',
        width: '100%',
        height: '25%',
        backgroundColor: '#074073'
        /* borderWidth: 2,
        border: 'solid',
        borderColor: 'red', */
    },

    titleHeader: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    }
})


