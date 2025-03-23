import React, {FC} from "react";
import { View, Text, StyleSheet, Image, Button} from "react-native"
import { Link } from "expo-router";

import  {PostImage}  from "../../types";


const TodaysImage: FC<PostImage> = ({date,title,url}) => {

    return (
        <View style = {styles.container}>
            <View style={styles.imageContainer} >
                <Image source={{uri: url}} style={styles.image} />
            </View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                {/* <Button  title="View" onPress={handleViewPress} /> */}
                <Link href='/detail' style={styles.viewButton}>View</Link>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 28,
        marginHorizontal:16,
        padding:16,
        borderWidth: .5,
        borderColor: 'white',
    },
    imageContainer: {

    },
    image: {
        width: '100%',
        height: 190,
        borderWidth: 1,
        borderRadius: 28
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginVertical : 10,
        fontWeight: 'bold',
    },
    date:{
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

export default TodaysImage;