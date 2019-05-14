import React, {Component} from 'react';
import Router from './src/Routes'
import axios from 'axios';

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  componentWillMount(){
    //Incializa o Axios
    axios.defaults.baseURL = 'http://www.omdbapi.com/';

  }
  render() {
    return (
      <Router/>
    );
  }
}
