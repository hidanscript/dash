import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Imagen from '../../Images/frentona.jpg';

export default class Post extends Component {

    render() {
        return (
            <View style={styles.postBody}>
              <View style={styles.postTitle}>
                <Text style={styles.text}>Hello! :D</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.imagen} source={Imagen}/>
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

  postBody: {
    display:'flex',
    backgroundColor: '#fff',
    height: 600,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

  postTitle : {
    alignSelf: 'flex-start',
    width:'100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  text: {
    color: 'gray',
  },

  imageContainer: {
    width:'100%',
    height: 400,
  },  

  imagen : {
    width:'100%',
    height:'100%',
  }
});
