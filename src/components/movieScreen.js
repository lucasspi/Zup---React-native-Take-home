import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
export default class MovieScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
            loading: true,  
            hideLove: true 
        };
      }
      componentDidMount(){
        this.setState({loading: true})
        axios({
          method: 'GET',
          url: '?i=tt3896198&apikey=71226e01',
        }).then((response) => {
            console.log(`[tabmain]: `,response.data)
            this.setState({
                movie: response.data,
                loading: false
          })
        }).catch((error) => {
          this.setState({
            error: 'Error retrieving data',
            loading: false
          });
        });
        }
    manageLoveVisibility = () =>{
        console.log('test');
        this.setState({ hideLove: !this.state.hideLove });
    }
    castTratamento(){
        var str = this.state.movie.Actors;
        var wordsArray = str.split(", ");
        
        return wordsArray;
    }
    jumpLineActors(){
        if (this.state.movie) {
        let actors = this.castTratamento();
            return(
                <FlatList
                    numColumns={1}
                    keyExtractor={item => item.id}
                    data={actors}
                    renderItem={({ item }) => {                        
                    if (item.empty) {
                        return <View></View>;
                    }
                    return (
                        <Text style={styles.textSmall}>{item}</Text>
                        );
                    }}
                />
            );
        }else{
            return(
                <View></View>
            );
        }
    }
      
    render(){
        if(this.state.movie){
            const item = this.state.movie;
        
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.containerView}>
                    <ImageBackground style={styles.bgImage} source={{uri: item.Poster}}>
                        <View style={styles.iconsBg}>
                            <TouchableOpacity onPress={() => Actions.pop() } >
                                <Image source={require('../imgs/arrow.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1.0} onPress = { this.manageLoveVisibility }>
                                <Image source = { ( this.state.hideLove ) ? require('../imgs/heart.png') : require('../imgs/heart-selected.png') }/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.content}>
                    <Text style={styles.slugTitle}>{item.Title}</Text>
                    <View style={styles.mainContent}>
                        <Image source={require('../imgs/star.png')} />
                        <Text style={styles.smallText}>{item.Ratings[0].Value}</Text>
                        <Image source={require('../imgs/clock.png')} />
                        <Text style={styles.smallText}>{item.Runtime}</Text>
                        <Image source={require('../imgs/film.png')} />
                        <Text style={styles.smallText}>{item.Year}</Text>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.titleContent}>Plot</Text>
                        <Text style={{color: '#b0b0b0'}}>{item.Plot}</Text>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.titleContent}>Cast</Text>
                        {this.jumpLineActors()}
                    </View>
                    <View style={styles.textContentEnd}>
                        <View style= {styles.pv10} >
                            <Text style={styles.titleContent}>Genre</Text>
                            <Text style={styles.textSmall}>{item.Genre}</Text>
                        </View>
                        <View style= {styles.pv10} >
                            <Text style={styles.titleContent}>Director</Text>
                            <Text style={styles.textSmall} >{item.Director}</Text>
                        </View>
                    </View>
                    

                </View>
            </ScrollView>
        );
    }else{
        return(
            <View></View>
        );
    }
    }
}

const styles = StyleSheet.create({
    pv10:{
        paddingVertical:10,
    },
    textSmall:{
        color: '#b0b0b0',
        fontSize:12, 
        lineHeight:20
    },
    safeAreaView: {
        flex:1, 
        backgroundColor: '#f1f1f1'
    },
    container: {
        flex: 1,
        paddingBottom:900
    },
    bgImage: {
        width: '100%',
        height: 300,
        paddingTop: 40,
    },
    containerView: {
        flex:2,
        backgroundColor: '#f1f1f1'
    },
    content: {
        paddingVertical: 20,
        position: 'absolute',
        marginLeft: 22,
        marginRight: 22,
        left: 0,
        top:250,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    iconsBg: {
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    mainContent: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 15,
        borderBottomColor: '#b0b0b0', 
        borderBottomWidth: 1
    },
    smallText: {
        color: '#b0b0b0', 
        paddingLeft: 3, 
        paddingRight: 10
    },
    textContent:{ 
        padding: 15,
        borderBottomColor: '#b0b0b0', 
        borderBottomWidth: 1 
    },
    textContentEnd:{ 
        padding: 15,
    },
    titleContent:{
        color: '#333333', 
        paddingBottom: 10, 
        fontSize: 16,
    },
    moviesSections: {
        flex:5,
        paddingTop:30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    allMovies: {
        fontSize: 17,
        fontWeight: '400',
        color: '#333333'
    },
    bearImage: {
        justifyContent: 'center',
        height: 220, 
        width: 220
    },
    mainTextMovieSection: {
        fontSize: 17, 
        lineHeight: 40, 
        color: '#333333'
    },
    tryAgain: {
        fontSize: 15, 
        color: '#c6c6cb'
    },
    slugTitle: {
        fontSize: 18,
        color: '#333333',
        textAlign:'center'
    }
    
});