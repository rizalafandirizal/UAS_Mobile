import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';

const Pengaturan = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState);
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleLocationSwitch = () => setIsLocationEnabled(previousState => !previousState);
  const toggleSoundSwitch = () => setIsSoundEnabled(previousState => !previousState);

  return (
    <ScrollView style={isDarkModeEnabled ? styles.darkContainer : styles.container}>
      <Text style={isDarkModeEnabled ? styles.darkTitle : styles.title}>Pengaturan</Text>
      <View style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Mode Gelap</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkModeSwitch}
          value={isDarkModeEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Notifikasi</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotificationsSwitch}
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Lokasi</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLocationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLocationSwitch}
          value={isLocationEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Suara</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSoundSwitch}
          value={isSoundEnabled}
        />
      </View>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Bahasa</Text>
        <Text style={isDarkModeEnabled ? styles.darkSettingDetail : styles.settingDetail}>Indonesia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Keamanan</Text>
        <Text style={isDarkModeEnabled ? styles.darkSettingDetail : styles.settingDetail}>Ganti Kata Sandi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={isDarkModeEnabled ? styles.darkSettingText : styles.settingText}>Tentang Aplikasi</Text>
        <Text style={isDarkModeEnabled ? styles.darkSettingDetail : styles.settingDetail}>Versi 1.0.0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  darkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
    color: '#000',
  },
  darkSettingText: {
    fontSize: 18,
    color: '#fff',
  },
  settingDetail: {
    fontSize: 16,
    color: '#777',
  },
  darkSettingDetail: {
    fontSize: 16,
    color: '#aaa',
  },
  button: {
    padding: 10,
    margin: 30,
    backgroundColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default Pengaturan;