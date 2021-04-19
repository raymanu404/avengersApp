import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Navigator from './routes/drawer';


export default function App() {

    return (       
        <Navigator />             
    )  
};

