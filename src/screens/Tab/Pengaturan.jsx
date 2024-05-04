import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Pengaturan() {
  return (
      <View style={styles.container}>
        <Image
        source={require('../../assets/image/baground.jpg')}
        style={styles.image}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
})