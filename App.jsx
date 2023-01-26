import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import api from './src/services/api';
import Posts from './src/Posts';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loading: true,
    }
  }

  async componentDidMount(){
    const response = await api.get('rn-api/?api=posts');
    this.setState({
      posts: response.data,
      loading: false,
    })
  }

  render(){
    if(this.state.loading){
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator color="#09a6ff" size={40}/>
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
          <FlatList
          data={this.state.posts}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Posts data={item} />}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;