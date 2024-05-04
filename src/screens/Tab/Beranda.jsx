import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Beranda() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'blue' }]}>Selamat Datang di Aplikasi Kami</Text>
      <Image
        source={require('../../assets/image/baground.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/image/profil1.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/image/foto.png')}
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})