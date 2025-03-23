import React, {FC} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

import { PostImage as PostImageTypes} from "@/types";

const PostImage : FC<PostImageTypes> = ({title, date}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.button}>
                <Button title='View'/>
            </View>
        </View>
    )
};

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 15,
        marginVertical: 10,

    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    date: {
        color: 'white',
        paddingLeft: 10,
    },
    button: {
        padding: 10,
        alignItems: 'flex-end'
    },
})

export default PostImage;