import React from "react";
import {View, Text, SafeAreaView, Image, StyleSheet, ScrollView} from 'react-native';
import { useLocalSearchParams } from "expo-router";

const Detail = () => {
    const params = useLocalSearchParams();
    const {title,date,url,explanation} = params;
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image source={{uri: url.toString()}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.scrollView} >
                    <Text style={styles.explanation} >{explanation}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(7,26,93,255)',
    },
    container: {
        flex:1,
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 28,
        marginHorizontal:16,
        padding:16,

    },
    imageContainer: {

    },
    image: {
        width: '100%',
        height: '50%',
        borderWidth: 1,
        borderRadius: 28
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginVertical : 5,
        fontWeight: 'bold',
    },
    date:{
        color: 'white',
        fontSize: 14,
        marginBottom:10,
    },
    scrollView: {
        
    },
    explanation:{
        color: 'white',
        fontSize: 14,
    },
    buttonContainer:{
        alignItems: 'flex-end'
    },
    viewButton: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Detail;