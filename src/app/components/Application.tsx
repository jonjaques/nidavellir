import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding: 20,
    height: '100%',
    backgroundColor: '#000000'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  }
})

export class Application extends React.Component {
  render() {
    return <View style={styles.root}>
      <Text style={styles.text}>Nidavellir</Text>
    </View>
  }
}