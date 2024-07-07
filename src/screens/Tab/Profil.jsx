import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Mengimpor ikon dari FontAwesome
import Foto from '../../assets/image/profil1.jpg';

export default function Profil() {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../../assets/image/laundry1.jpg')} />
      <View style={styles.overlay} />
      <View style={styles.profilContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.fotoContainer} source={Foto} />
        </View>
        <Text style={styles.name}>Mohammad Rizal Afandi</Text>
        <Text style={styles.bio}>A passionate developer who loves to explore new technologies and frameworks. Always eager to learn and grow.</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Kontak Informasi</Text>
          <Text style={styles.info}>Email: isi sendiri</Text>
          <Text style={styles.info}>Phone: +62*********</Text>
          <Text style={styles.info}>Address: Hati yang mati</Text>
        </View>
        <View style={styles.socialMediaContainer}>
          <Text style={styles.socialMediaTitle}>Media Sosial</Text>
          <View style={styles.socialMediaIcons}>
            <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
            <Icon name="twitter" size={30} color="#00acee" style={styles.icon} />
            <Icon name="instagram" size={30} color="#C13584" style={styles.icon} />
            <Icon name="linkedin" size={30} color="#0e76a8" style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profilContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imgContainer: {
    marginBottom: 20,
  },
  fotoContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: 'white',
    borderWidth: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  editButtonText: {
    color: 'black',
    fontSize: 16,
  },
  infoContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
  },
  socialMediaContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  socialMediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  icon: {
    marginHorizontal: 10,
  },
});
