import React, {Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    
} from "react-native"

import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'

class Header extends Component{
    render(){
        return(
            <Card style={Styles.Card}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/left.png')} style={Styles.Thumbnail_left}/>
                        </Left>

                        <Body>
                            <Text style={Styles.titleText}>Saikumar Reddy</Text>
                        </Body>
                    
                    <Right>
                        <Thumbnail source={require('../assets/bar.png')} style={Styles.Thumbnail_right}/>
                    </Right>
                    
                </CardItem>
                <CardItem style={Styles.CardItem}>
                <Left>
                    <Text style={Styles.Text_left}>Followers</Text>
                </Left>
                <Right style={Styles.Right}>
                    <Text style={Styles.Text_Right}>Following</Text>
                </Right>

                </CardItem>
                
            </Card>
        )
    }
}

const Styles = StyleSheet.create({
    Card:{
    marginTop:30,
    height:120

    },
    titleText: {
    
      fontWeight: "bold",
      fontSize:16,
      right:20,
      top:15,
      color:"#EC7063"
    },
    Thumbnail_left:{
        width:20,
        left:2
    },
    Thumbnail_right:{
        left:10,
        width:50
    },
    Text_left:{
        fontSize:15,
        left:30

    },
    Text_Right:{
        fontSize:15,
        right:30,
        color:"#EC7063",
       

    },
    Right:{
        borderBottomColor:"#EC7063",
        borderBottomWidth:3

    },
    CardItem:{
        bottom:10
    }
  });
 

export default Header