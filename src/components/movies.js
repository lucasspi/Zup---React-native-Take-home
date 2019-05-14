import React, {Component} from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    ScrollView,
    ActivityIndicator} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import LogoComponent from './logoComponent';
import SearchComponent from './searchComponent';

export default class tabMain extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: true,
          movie: '',
          error: ''
        }
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
    timeConvert(item){
        let n = this.hourTratamento(item)[0];
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }
    hourTratamento(item){
        var str = item;
        var wordsArray = str.split(" ");
        return wordsArray;
    }

    render(){
        if(this.state.movie){
        const item = this.state.movie;
            return(
                <View style={styles.mainViewSection}>
                    <LogoComponent/>
                    <View style={styles.mt30}>
                        <SearchComponent/>
                        <View style={styles.pv30}>
                            <Text style={styles.allMovies}>All Movies</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.backgroung} contentContainerStyle={styles.contentContainer}>
                    {/** Para adicionar mais filmes da mesma API, basta adicionar um FlatList Aqui */}
                        <TouchableOpacity style={styles.item} onPress = {() => Actions.movieScreen()}> 
                            <View style={styles.viewImage}>
                                <Image source={{uri: item.Poster}} style={styles.imageIcon} />
                                <ActivityIndicator style={styles.activityIndicatorStyle} size="small" color="#efefef"  />
                            </View>
                            <View style={styles.itemNameView}>
                                <Text style={styles.text}>{item.Title}</Text>
                                <Text style={styles.text}>{this.timeConvert(item.Runtime)}</Text>
                            </View>
                        </TouchableOpacity>            
                    </ScrollView>
                </View>  
            );
        }else{
            return(
                <View style={styles.moviesSections}>
                    <Image style={styles.bearImage} source={require('../imgs/empty3x.png')} />
                    <Text style={styles.mainTextMovieSection}>Don't know what you search?</Text>
                    <Text style={styles.tryAgain}>Try search again!</Text>
                </View>
            );
        }
    }
            
  }
  const styles = StyleSheet.create({
    itemNameView:{
        paddingVertical: 7, 
        flex:1, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'
    },
    activityIndicatorStyle:{
        position:"absolute",
        zIndex: 10,
        margin:10
    },
    pv30:{
        paddingVertical:30
    },
    mt30:{
        marginTop:30
    },
    mainViewSection:{
          flex: 1, 
          paddingTop: 40, 
          paddingHorizontal: 20, 
          backgroundColor: 'white'
    },
    allMovies: {
        fontSize: 17,
        fontWeight: '400',
        color: '#333333'
    },
    viewImage:{
        shadowOffset:{  width: 4,  height: 4,  }, 
        shadowColor: 'grey', 
        shadowOpacity: 0.5, 
    },
    imageIcon:{
        width: "40%", 
        height: 110, 
        zIndex: 50,
        borderRadius:7,
      },

    item: {
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: "white",
        flexGrow: 1,
        margin: 4,
        
        flexBasis: 0,
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
    text: {
        color:'#333333',
        fontSize: 10,
        lineHeight: 15,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        textAlign: 'left'
    },
    backgroung: {
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        paddingBottom: 280,
    }
  });