import React from 'react';
import {StyleSheet, Text , View, Image ,ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export  default function Header( { navigation,title } ){
 const  openMenu = () =>{
    navigation.openDrawer();
 }

 return (
    <ImageBackground source={require('../assets/avengers_bkg.png')} style={styles.header}>
        <MaterialIcons name="restaurant-menu"  size={30} style={styles.icon} onPress={() => openMenu()} color="black" />
      
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',margin:10}}>
            <Image source={require('../assets/avengers_logo.png')} style={{width:30,height:30,marginRight:10}} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    </ImageBackground >
 );
};

const styles = StyleSheet.create({
    header:{
        margin:0,
        left:-20,
        width:400,
        padding:24,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#718093',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        letterSpacing:3,
    },
    icon:{
        position:'absolute',
        left:16,
    }
});