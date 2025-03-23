import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* ITU Logo */}
      <Image
        source={require('../assets/images/bgHomeScreen.jpg')}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to ITU Admission Portal</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.buttonText, styles.signupText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Light background for a soft aesthetic
    paddingHorizontal: 20,
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Darker color for contrast
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    gap: 15, // Space between buttons
  },
  button: {
    backgroundColor: '#4CAF50', // Soft green color for a fresh look
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  signupButton: {
    backgroundColor: '#FFFFFF', // White button for Sign Up
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#4CAF50', // Green text for Sign Up button
  },
});

export default WelcomeScreen;
