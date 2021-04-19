import React,{ useState } from 'react';
import {StyleSheet, View , Text, FlatList , TouchableOpacity, Image ,SafeAreaView ,Modal } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation}){

    const [reviews, setReviews ] = useState([
        {
            title:'Avengers:Infinity war',            
            image:'https://cdna.artstation.com/p/assets/images/images/018/256/764/large/george-britton-infinitywarposterv2.jpg?1558723043&dl=1', 
            rating: 5,
            body:'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
            key:'1'
        },
        {
            title:'Avengers:EndGame',
            image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', 
            rating: 4, 
            body:'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face..',
            key:'2'
        },
        {
            title:'Avengers',
            image:'https://i.pinimg.com/originals/04/e8/21/04e8210c2048e31d2049a7876613f54d.jpg', 
            rating: 3, 
            body:'Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who\'s who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster which is formed by Loki and his team',
            key:'3'
        },
        {
            title:'Wanda & Vision',
            image:'https://collider.com/wp-content/uploads/2020/09/wandavision-poster.jpg', 
            rating: 3, 
            body:'Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.',
            key:'4'
        },
        {
            title:'Falcon and Winter Soldier',
            image:'https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg', 
            rating: 4, 
            body:'Following the events of \'Avengers: Endgame,\' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.',
            key:'5'
        },
        {
            title:'Thor:Ragnarok',
            image:'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg', 
            rating: 4, 
            body:'Imprisoned on the other side of the universe, the mighty Thor (Chris Hemsworth) finds himself in a deadly gladiatorial contest that pits him against The Incredible Hulk (Mark Ruffalo), his former ally and fellow Avenger. Thor\'s quest for survival leads him in a race against time to prevent the all-powerful Hela (Cate Blanchett) from destroying his home world and the Asgardian civilization.',
            key:'6'
        },
        {
            title:'Doctor Strange',
            image:'https://static.posters.cz/image/750/postere/doctor-strange-portal-i33477.jpg', 
            rating: 3, 
            body:'Marvel\'s \"Doctor Strange\" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City\'s Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.',
            key:'7'
        },
        {
            title:'Avengers:Age of Ultron',
            image:'https://images-na.ssl-images-amazon.com/images/I/71wV2rzkFwL._AC_SL1022_.jpg', 
            rating: 3, 
            body:'Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth\'s mightiest heroes must come together once again to protect the world from global extinction.',
            key:'8'
        },
        {
            title:'Captain America:Civil War',
            image:'https://static.posters.cz/image/750/postere/captain-america-civil-war-one-sheet-i30823.jpg', 
            rating: 3, 
            body:'With many people fearing the actions of super heroes, the government decides to push for the Hero Registration Act, a law that limits a hero\'s actions. This results in a division in The Avengers. Iron Man stands with this Act, claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain America feels that saving the world is daring enough and that they cannot rely on the government to protect the world. This escalates into an all-out war between Team Iron Man (Iron Man, Black Panther, Vision, Black Widow, War Machine, and Spider-Man) and Team Captain America (Captain America, Bucky Barnes, Falcon, Scarlet Witch, Hawkeye, and Ant Man) while a new villain emerges.',
            key:'9'
        },
        {
            title:'Black Panther',
            image:'https://images-na.ssl-images-amazon.com/images/I/711itbIZaBL._AC_SL1085_.jpg', 
            rating:2, 
            body:'After the events of Captain America: Civil War, Prince T\'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country\'s new king. However, T\'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.',
            key:'10'
        },

    ]);
    const [ modelOpen,setModalOpen ] = useState(false);
   
    return(
        <SafeAreaView style={styles.container}>

            <Modal visible={modelOpen} animationType='slide' >
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name='close'
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=>{
                        setModalOpen(false)
                    }}
                    />
                    <Text>Hello from Modal</Text>
                </View>
            </Modal>
               
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=>{
                    setModalOpen(true)
                }}
            />
            <FlatList 
              data={reviews}
              renderItem={( { item }) =>(
                 <View> 
                     <Card>
                        <Text style={styles.text}>{item.title}</Text>
                    </Card>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('ReviewDetails', item);
                    }}>
                        
                        <Image source={{uri:item.image}} style={{width:350,height:450}}/>
                    </TouchableOpacity>
                </View>
              )}
            />
           
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#30336b',
    },
    text:{
        color:'#FFF',
        fontSize:24,
    },
    modalToggle:{
        marginBottom:10,
        color:'#FFF',
        padding:10,      
        alignSelf:'flex-start',
    },
    modalContent:{
        flex:1,
    }
});
