import React, {Component,Dimensions} from "react";
import{
    View,
    ScrollView,
    FlatList,
    Text,
    StyleSheet,
    Image,
    
} from "react-native"

import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'

class Cardcomponent extends Component{
    
    render(){
        return(
                <CardItem style={Styles.Carditem}>
                    
                        <Thumbnail source={require('../assets/dhoni.jpg')} style={Styles.Thumbnail}/>
                        <Body>
                            <Text style={Styles.titleText}>Mahendra Singh Dhoni</Text>
                            <Text style={Styles.Bodytext}>An Indian Cricketer Who won all the ICC toournaments as a captain</Text>
                            <Text style={Styles.Footer}>8 Members     5.3M Thanks     291k Followers</Text>
                        </Body>
                        <Button style={Styles.Button} rounded>
                            <Text style={Styles.Button_text}>Following</Text>
                        </Button>
                </CardItem>
        )
    }
}

const Styles = StyleSheet.create({
    titleText: {
      fontWeight: "bold",
      fontSize:15,
      marginLeft:10
    },
    Carditem: {
        borderBottomWidth:0.5
      },
      Thumbnail:{
          width:40,
          height:40,
          bottom:10
      },
      Bodytext:{
          marginLeft:10,
          color:"#838e9e",
          fontWeight:"bold"
      },
      Button:{
          height:25,
          width:60,
          backgroundColor:"#EC7063",
          bottom:20,
          right:10

      },
      Button_text:{
          color:"white",
          fontWeight:"bold",
          fontSize:12
      },
      Footer:{
          fontSize:10,
          marginLeft:10,
          color:"#838e9e",
          fontWeight:"bold"
      }
  });

export default Cardcomponent