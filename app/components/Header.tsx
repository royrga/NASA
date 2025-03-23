import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{width: "50%", alignItems: 'flex-start', justifyContent: 'center'}}>
                <Text style={styles.text} >Explore</Text>
            </View>
            <View  style={{width: "50%", alignItems: 'flex-end'}}>
                <Image style={styles.image} source={require('../../assets/NASA-Logo-Large.png') } />
            </View>
            
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 28,
        textAlign: 'left',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',

    },  
});

export default Header;

