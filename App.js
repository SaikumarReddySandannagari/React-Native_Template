import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import Cardcomponent from './components/Cards' 
import Header from './components/Header'
import {Content, Container } from 'native-base';
import { Icon } from 'react-native-elements'
import Feed from './components/Feed'

export default function App() {
  return (
    <View>
    <View>
      <Header/>
    </View>
    <Feed/>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
