import React from 'react';
import {StyleSheet,View , Text,ImageBackground} from 'react-native';

import {globalStyles } from '../styles/global';

export default function About(){
    
    return(
        <ImageBackground source={require('../assets/marvel_bkg.jpg')} style={globalStyles.container}>
            <Text style={styles.titleText}>About MCU</Text>
        </ImageBackground>
    );
};

const styles=StyleSheet.create({
    titleText:{
        color:'#FFF',
        fontSize:24,
        letterSpacing:3,
        textAlign:'right',
        borderBottomWidth:3,
        borderBottomColor:'#FFF',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
    }
});