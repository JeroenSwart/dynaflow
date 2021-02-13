import React from 'react';
import { StyleSheet, Text } from 'react-native';
import getTaskAPI from '../util/ApiCalls';

export default class TaskOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      title: ''
    }
  }
  async componentDidMount() {
    // Get document title from Dynalist API
    this.setState({
      title: await getTaskAPI(),
      loading: false
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <Text style={styles.container}>Loading.....</Text>
      )
    } else {
      return (
        <Text style={styles.container}>{this.state.title}</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#200',
  },
});
