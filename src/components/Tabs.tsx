import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TaskScreen } from '@screens/TaskScreen'
import { NoOpScreen } from '@screens/NoOpScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { TabHeader } from './TabHeader'

const Tab = createBottomTabNavigator()

const taskIcon = () => <FontAwesome name="tasks" size={24} />
const projectIcon = () => <MaterialCommunityIcons name="briefcase" size={24} />
const chatsIcon = () => <Entypo name="chat" size={24} />
const teamIcon = () => <MaterialIcons name="group" size={24} />
const accountIcon = () => <MaterialCommunityIcons name="account" size={24} />

const sharedOptions = {
  tabBarIconStyle: {},
  tabBarLabelStyle: {
    color: 'rgba(0,0,0,1)',
  },
  tabBarStyle: {},
  headerShow: false,
}

const header = () => <TabHeader />

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ header }}>
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{ tabBarIcon: taskIcon, ...sharedOptions }}
      />
      <Tab.Screen
        name="Project"
        component={NoOpScreen}
        options={{ tabBarIcon: projectIcon, ...sharedOptions }}
      />
      <Tab.Screen
        name="Chats"
        component={NoOpScreen}
        options={{ tabBarIcon: chatsIcon, ...sharedOptions }}
      />
      <Tab.Screen
        name="Team"
        component={NoOpScreen}
        options={{ tabBarIcon: teamIcon, ...sharedOptions }}
      />
      <Tab.Screen
        name="Account"
        component={NoOpScreen}
        options={{ tabBarIcon: accountIcon, ...sharedOptions }}
      />
    </Tab.Navigator>
  )
}

export { MainTabs }
