import React from 'react';
import {StyleSheet,View , Text, Button ,Image,ScrollView, SafeAreaView  } from 'react-native';

import {globalStyles,images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails( {navigation} ){
    
    const pressHandler = () =>{
        navigation.goBack();
    }
    const icon = navigation.getParam('image');
    const ratings = navigation.getParam('rating');

    return(
        <SafeAreaView style={styles.container} >
        <ScrollView style={styles.scrollView}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>    
            </Card> 

            <Image source={{uri:icon}} style={{width:350,height:450}}/>                        
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>              
            </Card>         
            <Card>
                <Text style={globalStyles.titleText}> Rating :  <Image source={images.ratings[ratings]} /> </Text>
                      
            </Card>
           
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
 scrollView:{
    
    marginHorizontal:20,
 },
 container:{
     backgroundColor:'#686de0',
     flex:1,
 },
 
});