import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation, setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setIsAuthenticated(true); // Redirect to Home
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Input Fields */}
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

      {/* Login Button */}
      <CustomButton title="Login" onPress={handleLogin} />

      {/* Sign Up Link */}
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
    backgroundColor: '#fde8e9', // Light pink background 🎀
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
