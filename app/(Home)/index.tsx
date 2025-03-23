import React, { useEffect, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import  Header from '../components/Header';
import fetchAPI from '../../utils/fetch';
import TodaysImage from '../components/TodaysImage';
import { PostImage } from '../../types';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});

    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchAPI();
                setTodaysImage(todaysImageResponse)
            } catch (error) {
                console.error(error);
                setTodaysImage({})
            }
        };

        loadTodaysImage().catch(null);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Header /> 
            <TodaysImage {...todaysImage} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(7,26,93,255)',
    },
});

export default Home;