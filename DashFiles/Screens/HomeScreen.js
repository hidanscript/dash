import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRetro, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontSize , STATUSBAR_HEIGHT, IconSize } from '../Components/Constants';
import Post from '../Components/Dashboard/Post';

export default class HomeScreen extends Component {

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.topBar}>
              <FontAwesomeIcon style={styles.icon} icon={ faCameraRetro } size={IconSize}/>
              <Text style={styles.text}>Dash</Text>
              <FontAwesomeIcon style={styles.iconVideo} icon={ faVideo } size={IconSize}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </ScrollView>
        </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      display: 'flex',
      paddingTop: STATUSBAR_HEIGHT,
      backgroundColor: '#ececeb',
      width:'100%',
      height: '100%',
    },
  
    icon: {
      color:'black',
      alignSelf: 'center',
    },

    iconVideo: {
      color:'black',
      alignSelf: 'center',
      marginLeft: 'auto',
      marginRight: 20
    },
  
    text: {
      color: '#000',
      alignSelf: 'center',
      fontSize: FontSize,
      paddingLeft: 10,
    },
  
    topBar: {
      paddingLeft:10,
      display: 'flex',
      flexDirection: 'row',
      height:50,
      backgroundColor: '#fff',
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      zIndex: 100,
    }
});
  
/*
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
*/