import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput
} from 'react-native';

export default class SearchComponent extends Component {
    render() {
        return (
            <View style={styles.searchView}>
                <Image source={require('../imgs/search.png')}/>
                <TextInput
                    style={{height: 40, paddingLeft:7}}
                    onChangeText={(text) => this.setState({text})}
                    
                    placeholder={"Search Movies"}
                    placeholderTextColor={"#acb2b7"}
                    />
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:25,
        borderColor: '#acb2b7', 
        borderWidth: 1
    },
});