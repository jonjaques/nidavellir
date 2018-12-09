import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff'
  }
})

export class Application extends React.Component {
  render() {
    return <View style={styles.root}>
      <Text>Nidavellir</Text>
    </View>
  }
}