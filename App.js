import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import IndexScreen from './src/screens/IndexScreen'
import store from './src/store/blogPosts'
import { Feather } from '@expo/vector-icons'
import CreateScreen from './src/screens/CreateScreen'
import PostScreen from './src/screens/PostScreen'
import EditScreen from './src/screens/EditScreen'
import { EvilIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather
                    style={{ color: 'red', marginRight: 10 }}
                    size={30}
                    name='plus'
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen
            name='Post'
            component={PostScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Edit', {
                      id: route.params.id,
                    })
                  }
                >
                  <EvilIcons
                    style={{ color: 'red', marginRight: 10 }}
                    size={30}
                    name='pencil'
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
