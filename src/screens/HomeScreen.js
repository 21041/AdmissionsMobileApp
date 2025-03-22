import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomCard
        title="Application Status"
        description="Your application is under review."
        status="Pending"
      />
      <CustomButton
        title="Apply Now"
        onPress={() => navigation.navigate('Application')}
      />
      <CustomButton
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
