import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#e1e1e1',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 200, // vertically center the text
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // necessary for Android
  }
});

export default ProfileScreen;
