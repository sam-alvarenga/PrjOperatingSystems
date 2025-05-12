import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

import { androidIosStyles } from "./Android"; //importando o style da page android
import Button from "../components/Button"; //importando o componente do button voltar

export default function Ios({ navigation }) {
    return (
        <SafeAreaView style={androidIosStyles.containerInfo}>
            <ScrollView style={androidIosStyles.info}>
                <Image
                    style={androidIosStyles.img}
                    source={require('./../assets/image/ios.jpg')}
                />
                <View style={androidIosStyles.containerInfo} >
                    <Text style={androidIosStyles.title}>IOS</Text>

                    <Text style={androidIosStyles.text}> O iOS é o sistema operacional móvel da Apple, lançado em 2007 junto com o primeiro iPhone. Ele foi desenvolvido especificamente para dispositivos Apple, como o iPhone, iPad, iPod Touch, e mais recentemente, o Apple Watch e Apple TV.</Text>
                    <Text style={androidIosStyles.title}>Fechamento e Exclusividade</Text>
                    <Text style={androidIosStyles.text}>O iOS é um sistema fechado. Ou seja, a Apple controla rigorosamente o código-fonte e o acesso ao sistema. O iOS só roda em hardware Apple, o que dá à empresa um controle maior sobre a qualidade e a experiência do usuário.</Text>
                    <Text style={androidIosStyles.title}>Qualidade e Consistência</Text>
                    <Text style={androidIosStyles.text}>Devido ao controle sobre o hardware e software, a Apple oferece uma experiência de usuário mais consistente e otimizada. O iOS tem uma integração perfeita com os dispositivos Apple, como Macs, iPads, Apple Watches, etc.</Text>
                    <Text style={androidIosStyles.title}>Loja de Apps</Text>
                    <Text style={androidIosStyles.text}>O sistema de distribuição de aplicativos é a App Store, que tem regras bem rígidas para a publicação de apps. Isso mantém a plataforma bem controlada e segura, mas também pode ser um obstáculo para desenvolvedores que buscam mais liberdade na publicação de apps.</Text>
                    <Text style={androidIosStyles.title}>Desenvolvimento</Text>
                    <Text style={androidIosStyles.text}>O iOS é desenvolvido principalmente com as linguagens Swift e Objective-C. A Apple oferece uma série de ferramentas como o Xcode para facilitar o desenvolvimento de aplicativos. Para quem usa React Native, é possível desenvolver para iOS também, sem precisar escrever em Swift.</Text>

                    <Button navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
} 