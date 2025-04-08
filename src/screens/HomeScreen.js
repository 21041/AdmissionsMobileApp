import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {
  const userName = 'Faiqa Iqbal'; // Placeholder, replace with actual user data
  const applicationStatus = 'Pending'; // Example status (can be "Accepted" or "Rejected")

  const getStatusStyle = () => {
    switch (applicationStatus) {
      case 'Accepted':
        return {color: '#2E7D32', backgroundColor: '#E8F5E9'}; // Green
      case 'Rejected':
        return {color: '#D32F2F', backgroundColor: '#FFEBEE'}; // Red
      default:
        return {color: '#F9A825', backgroundColor: '#FFF3E0'}; // Yellow
    }
  };

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome, {userName}! 🎓</Text>

      {/* Application Status Card */}
      <CustomCard
        title="Application Status"
        description={`Your application is ${applicationStatus.toLowerCase()}.`}
        status={applicationStatus}
        style={[styles.statusCard, getStatusStyle()]}
      />

      {/* Quick Action Buttons */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Apply Now"
          onPress={() => navigation.navigate('Application')}
        />
        <CustomButton
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <CustomButton
          title="Check Deadlines"
          onPress={() => navigation.navigate('CheckDeadline')}
        />
      </View>

      {/* Important Notice */}
      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          📢 Admission Deadline: March 30, 2025
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDDE1',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statusCard: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10, // Spacing between buttons
    marginTop: 20,
  },
  noticeBox: {
    marginTop: 30,
    backgroundColor: '#FFF3CD',
    padding: 10,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  noticeText: {
    color: '#856404',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
