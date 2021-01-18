import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import AnyName from '../Assets/check.png';
const {height, width} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
        }}>
        {/* Wrapp the Whole View */}
        <View
          style={{
            width: width - 60,
            height: height / 2,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              width: '70%',
              height: 50,
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text>This is Check One Mate</Text>
          </TouchableOpacity>
          <Image
            source={require('../Assets/check.png')}
            style={{width: '100%', height: 120}}
          />
        </View>
      </View>
    );
  }
}

export default App;
