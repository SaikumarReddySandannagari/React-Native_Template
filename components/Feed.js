import React,{Component} from 'react'
import {View,Flatlist,Text,SafeAreaView,ScrollView} from 'react-native'
import Cardcomponent from'./Cards'

class Feed extends Component{
    render(){
        return(
            <SafeAreaView >
            <ScrollView>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
              <Cardcomponent/>
            </ScrollView>
          </SafeAreaView>
        )
    }
}

export default Feed