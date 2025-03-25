import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ApplicationFormScreen from './src/screens/ApplicationFormScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ApplicantInfo from './src/screens/PersonalInfo/ApplicantInfo';
import AddressInfo from './src/screens/PersonalInfo/AddressInfo';
import ParentsInfo from './src/screens/PersonalInfo/ParentsInfo';
import GuardianInfo from './src/screens/PersonalInfo/GuardianInfo';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Public Screens */}
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

        {/* Private Screens */}
        <Stack.Screen name="Home">
          {({navigation}) =>
            isAuthenticated ? (
              <HomeScreen navigation={navigation} />
            ) : (
              <LoginScreen
                navigation={navigation}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        </Stack.Screen>
        <Stack.Screen name="Application">
          {({navigation}) =>
            isAuthenticated ? (
              <ApplicationFormScreen navigation={navigation} />
            ) : (
              <LoginScreen
                navigation={navigation}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        </Stack.Screen>

        {/* ✅ Fix: Register both ApplicantInfo & AddressInfo */}
        <Stack.Screen name="ApplicantInfo" component={ApplicantInfo} />
        <Stack.Screen name="AddressInfo" component={AddressInfo} />
        <Stack.Screen name="ParentsInfo" component={ParentsInfo} />
        <Stack.Screen name="GuardianInfo" component={GuardianInfo} />

        <Stack.Screen name="Profile">
          {({navigation}) =>
            isAuthenticated ? (
              <ProfileScreen navigation={navigation} />
            ) : (
              <LoginScreen
                navigation={navigation}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
