import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ProfilContextProvider } from './context/profilContext';
import Login from './composants/Login';
import Accueil from './composants/Accueil'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <View style={styles.container}>
      <ProfilContextProvider>  
     
          <NavigationContainer>
            <Tab.Navigator>
            
                <Tab.Screen name="accueil" component={ Accueil }
                options={{
                  tabBarIcon : ()=><MaterialCommunityIcons name="home" size={30} />
                }}/>
                <Tab.Screen name="connexion" component={ Login }
                options={{
                  tabBarIcon : ()=><MaterialCommunityIcons name="login" size={30} />
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