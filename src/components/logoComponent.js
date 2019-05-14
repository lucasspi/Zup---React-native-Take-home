import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={require('../imgs/play3x.png')}/>
                <View style={styles.containerView}>
                    <Text style={styles.logoMainText}>Next Play</Text>
                    <Text style={styles.logoSecondaryText}>Movies</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        // flex: 1, 
        flexDirection:"row",
        justifyContent: 'flex-start',
        zIndex: 99,
    },
    logo: {
        width: 30,
        height: 30,
        justifyContent:'flex-start',
        
    },
    containerView: {
        justifyContent:'flex-start',
        paddingLeft: 10,
        zIndex: 99,
    },
    logoMainText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333333',
        zIndex: 99,
    },
    logoSecondaryText: {
        fontSize: 12, 
        fontWeight: '300',
        color: '#333333',
        zIndex: 99,
    },
});