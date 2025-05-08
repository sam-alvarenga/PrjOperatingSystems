import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";


export default function Android() {
    return (

        <SafeAreaView style={styles.containerInfo}>
            <ScrollView style={styles.info}>
                <Image
                    style={styles.img}
                    source={require('./../assets/image/Android-1024x532.jpg')}
                />
                <Text style={styles.title}>Android</Text>
                <Text style={styles.text}>O Android foi criado pela Android Inc., que foi adquirida pelo Google em 2005. Seu lançamento oficial foi em 2008. É um sistema operacional baseado no Linux, o que permite uma flexibilidade maior em termos de personalização e controle sobre o hardware.</Text>
                <Text style={styles.title}>Código Aberto</Text>
                <Text style={styles.text}>Uma das maiores vantagens do Android é que ele é um sistema open-source (código aberto). Isso significa que qualquer pessoa pode acessar, modificar e distribuir o código. Isso permite uma variedade de dispositivos com Android, desde smartphones até tablets, TVs, carros, etc.</Text>
                <Text style={styles.title}>Ecossistema </Text>
                <Text style={styles.text}>O Android tem uma grande diversidade de dispositivos em várias faixas de preço, o que faz com que seja mais acessível em termos de custo. É o sistema operacional dominante no mundo, com uma participação de mercado superior a 70%.</Text>
                <Text style={styles.title}>Loja de Apps</Text>
                <Text style={styles.text}> A principal loja de aplicativos é a Google Play Store. Embora o Google tenha algumas políticas de controle, a loja é menos restritiva do que a App Store da Apple, o que pode ser tanto uma vantagem quanto uma desvantagem, dependendo da perspectiva.</Text>
                <Text style={styles.title}>Desenvolvimento:</Text>
                <Text style={styles.text}> Para desenvolvimento, o Android utiliza principalmente Java e Kotlin. No entanto, frameworks como React Native permitem o desenvolvimento cross-platform (para Android e iOS) de maneira mais fácil.</Text>
            </ScrollView>
        </SafeAreaView>

    );
}

export const styles = StyleSheet.create({
    containerInfo: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    text: {
        fontSize: 15,
         color: '#808080'
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 25,
        color: '#074073'
    },
    img: {
        alignSelf: 'center',
        width: 350,
        height: 200,
        borderRadius: 10,
        marginTop: 15
    }

})
