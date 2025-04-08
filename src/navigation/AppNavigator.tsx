import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CheckDeadline from '../screens/CheckDeadline';
import FormCompletedScreen from '../screens/FormCompletedScreen';
import ApplicationFormScreen from '../screens/ApplicationFormScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ApplicantInfo from '../screens/PersonalInfo/ApplicantInfo';
import AddressInfo from '../screens/PersonalInfo/AddressInfo';
import ParentsInfo from '../screens/PersonalInfo/ParentsInfo';
import GuardianInfo from '../screens/PersonalInfo/GuardianInfo';
import SecondaryEducation from '../screens/Academics/SecondaryEducation';
import BachelorsEducation from '../screens/Academics/BachelorsEducation';
import HigherSecondary from '../screens/Academics/HigherSecondaryEducation';
import Masters from '../screens/Academics/MastersEducation';
import DegreePreference from '../screens/Academics/DegreePreference';

import Test from '../screens/Test/TestTypeScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

const AppNavigator = ({isAuthenticated, setIsAuthenticated}) => {
  return (
    <Stack.Navigator>
      {/* Public Screens */}
      {!isAuthenticated && (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login">
            {({navigation}) => (
              <LoginScreen
                navigation={navigation}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}

      {/* Private Screens */}
      {isAuthenticated && (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Application" component={ApplicationFormScreen} />
          <Stack.Screen name="CheckDeadline" component={CheckDeadline} />
          <Stack.Screen name="ApplicantInfo" component={ApplicantInfo} />
          <Stack.Screen name="AddressInfo" component={AddressInfo} />
          <Stack.Screen name="ParentsInfo" component={ParentsInfo} />
          <Stack.Screen name="GuardianInfo" component={GuardianInfo} />
          <Stack.Screen
            name="SecondaryEducation"
            component={SecondaryEducation}
          />
          <Stack.Screen
            name="HigherSecondaryEducation"
            component={HigherSecondary}
          />
          <Stack.Screen
            name="BachelorsEducation"
            component={BachelorsEducation}
          />
          <Stack.Screen name="MastersEducation" component={Masters} />
          <Stack.Screen name="DegreePreference" component={DegreePreference} />

          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen
            name="FormCompletedScreen"
            component={FormCompletedScreen}
          />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
