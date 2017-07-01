import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      meetups: null
    };
    this.fetchMeetup();
  }

  fetchMeetup = () => {
    axios.get('http://192.168.8.102:3000/api/meetups')
      .then((response) => {
        this.setState({meetups: response.data.meetups});
      });
  };

  render() {
    if(this.state.meetups === null) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Meetup</Text>
        {this.state.meetups.map((meetup, key) => (
          <Text key={key}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
