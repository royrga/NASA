import React, {FC} from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView} from "react-native"
import { Link } from "expo-router";

import  {PostImage}  from "../../types";


const TodaysImage: FC<PostImage> = ({date,title,url,explanation}) => {

    return (
        <View style = {styles.container}>
            {/* <View style={styles.imageContainer}> */}
                <Image source={{uri: url}} style={styles.image} />
            {/* </View> */}
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                {/* <Button  title="View" onPress={handleViewPress} /> */}
                <Link href={{
                      pathname:'/detail',
                      params: {title,date,url,explanation}
                      }} 
                      style={styles.viewButton} >
                    View
                </Link>
            </View> 
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height:'50%',
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor: '#2c449d',
        marginHorizontal:10,
        marginTop:15,
        borderRadius: 15,
    },
    imageContainer: {
       alignItems: 'center',
    },
    image: {
        width:'100%',
        height:'65%',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'white',
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
        alignItems: 'flex-end',

    },
    viewButton: {
        backgroundColor: 'rgba(7,26,93,255)',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 18,
        borderWidth:2,
        borderRadius: 10,
        borderColor : 'red',
        padding:5, 
    }
});

export default TodaysImage;