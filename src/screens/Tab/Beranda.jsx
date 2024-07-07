import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

// Mengimpor gambar lokal
import BannerImage from '../../assets/image/laundry.jpg';
import ServiceImage1 from '../../assets/image/kering.jpg';
import ServiceImage2 from '../../assets/image/setrika.png';
import ServiceImage3 from '../../assets/image/sepatu.png';
import ServiceImage4 from '../../assets/image/sepatu.png';

const Beranda = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aplikasi Laundry</Text>
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
        <View style={styles.serviceItem}>
          <Image
            source={ServiceImage4}
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
      <Text style={styles.extraText}>Konten tambahan untuk pengujian scroll</Text>
      </View>
      <View style={styles.extraContent}>
        <Text style={styles.extraText}>

        </Text>
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
  },
  headerText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  banner: {
    width: 350,
    height: 200,
    borderRadius: 10,
    borderWidth: 20,
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
  },
  serviceImage: {
    width: 90,
    height: 90,
    left: 40,
    marginRight: 90,
    borderRadius: 10,
  },
  serviceText: {
    fontSize: 18,
    color: 'black',
  },
  footer: {
    padding: 20,
  },
  extraContent: {
    padding: 20,
  },
  extraText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    padding: 10,
  },
});

export default Beranda;