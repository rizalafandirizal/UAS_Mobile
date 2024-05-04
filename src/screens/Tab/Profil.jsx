import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Foto from '../../assets/image/profil1.jpg'

export default function Profil() {
  return (
    <View style={styles.container}>
      <View style={styles.profilContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.fotContainer} source={Foto}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profilContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: 'black',
    borderWidth: 3,
  },
})