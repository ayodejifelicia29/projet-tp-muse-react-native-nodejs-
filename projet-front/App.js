import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ProfilContextProvider } from './context/profilContext';
import Login from './composants/Login';
import Navstack from './composants/Navstack';
import Admin from './composants/Admin';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <View style={styles.container}>
      <ProfilContextProvider>  
          <NavigationContainer>
            <Tab.Navigator screenOptions={{
              headerShown: false
            }}>
                <Tab.Screen name="Accueil_default" component={Navstack}
                options={{
                  tabBarIcon : ()=><MaterialCommunityIcons name="home" size={30} />
                }}/>
                <Tab.Screen name="Connexion" component={ Login }
                options={{
                  tabBarIcon : ()=><MaterialCommunityIcons name="login" size={30} />
                }}/>
                 <Tab.Screen name="Admin" component={Admin }
                options={{
                  tabBarIcon : ()=><MaterialCommunityIcons name="view-dashboard-outline" size={30} />
                }}/>
            </Tab.Navigator>
          </NavigationContainer>

      </ProfilContextProvider>
      <StatusBar style="auto" backgroundColor='orange'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});