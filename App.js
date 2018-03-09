import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import api from './utilities/api.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      pic: '',
      explanation: '',
      date: ''
    }
  }

  componentDidMount(){
    api.nasaPics().then((res) => {
      this.setState({
        title: res.title,
        pic: res.hdurl,
        explanation: res.explanation,
        date: res.date,
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  // componentDidMount(){
  //   fetch('https://api.nasa.gov/planetary/apod?api_key=lydxUXmCkMpGc5Gg2gbiShdzhzQy2AkHv6vVHq9N')
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       title: res.title,
  //       pic: res.hdurl,
  //       explanation: res.explanation,
  //       date: res.date
  //     })
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text}>{this.state.title}</Text>
        <Image 
          source={{url: this.state.pic}}
          style={{width: 370, height: 200}}
        />
        <Text style={styles.text}>{this.state.explanation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    padding: 10
  }
});

