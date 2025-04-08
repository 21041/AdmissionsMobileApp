import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'; // Import from Firebase modular SDK
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {auth} from '../../firebaseConfig';

const LoginScreen = ({navigation, setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Changed from replace() to reset()
          setIsAuthenticated(true);
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        })
        .catch(error => {
          Alert.alert('Login Error', error.message);
        });
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton title="Login" onPress={handleLogin} />

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fde8e9', // Light pink background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b33e58', // Aesthetic deep pink
    marginBottom: 20,
  },
  signupText: {
    marginTop: 15,
    fontSize: 16,
    color: '#555',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#b33e58', // Deep pink link color
  },
});

export default LoginScreen;
