import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bgHomeScreen.jpg').default}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the Admission Portal</Text>
        <CustomButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate('Signup')}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay for better text contrast
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10, // Adds spacing between buttons
  },
});

export default WelcomeScreen;
