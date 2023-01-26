import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

class Posts extends Component{
    render(){
        const {titulo, capa} = this.props.data;
        
        return(
            <View style={styles.card}>
                
                <View>
                    <Text style={styles.titulo}>{titulo}</Text>
                </View>
                <Image
                source={{ uri: capa }}
                style={styles.capa}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => alert(titulo)}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
        overflow: 'hidden',
    },
    titulo: {
        fontSize: 18,
        padding: 15,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    areaBotao: {
        alignItems: "flex-end",
        marginTop: -40,
        zIndex: 9,
    },
    botao: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
    },
    botaoTexto: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 500,
    }
})

export default Posts;