import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

// Mengimpor gambar lokal
import BannerImage from '../../assets/image/laundry.jpg';
import ServiceImage1 from '../../assets/image/kering.jpg';
import ServiceImage2 from '../../assets/image/setrika.png';
import ServiceImage3 from '../../assets/image/sepatu.png';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang di Aplikasi Laundry</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={BannerImage}
          style={styles.banner}
        />
      </View>
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeader}>Layanan Kami</Text>
        <View style={styles.serviceItem}>
          <Image
            source={ServiceImage1}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Cuci Kering</Text>
        </View>
        <View style={styles.serviceItem}>
          <Image
            source={ServiceImage2}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Setrika</Text>
        </View>
        <View style={styles.serviceItem}>
          <Image
            source={ServiceImage3}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Cuci Sepatu</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          title="Pesan Sekarang"
          onPress={() => navigation.navigate('Order')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  banner: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  servicesContainer: {
    padding: 20,
  },
  servicesHeader: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    margin: 30,
  },
  serviceImage: {
    width: 90,
    height: 50,
    marginRight: 60,
    borderRadius: 90,
  },
  serviceText: {
    fontSize: 28,
    color: 'black',
  },
  footer: {
    padding: 20,
  },
});

export default HomeScreen;
