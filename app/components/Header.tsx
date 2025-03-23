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
    )
}; 

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',

    },  
});