import React, { useEffect, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import {format, sub} from 'date-fns'

import  Header from '../components/Header';
import TodaysImage from '../components/TodaysImage';
import LastFiveDaysImages from '../components/LastFiveDays';

import fetchAPI from '../../utils/fetch';
import { PostImage } from '../../types';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todaysImageResponse = await fetchAPI();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date,{days: 5}),'yyyy-MM-dd');

                const lastFiveDaysImagesResponse = await fetchAPI(
                    `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
                );
                //console.log(lastFiveDaysImagesResponse);
                //console.log(todaysDate, fiveDaysAgoDate);
                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
            }
        };

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Header /> 
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImages} />
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