import { LogBox } from 'react-native'
import { registerRootComponent } from 'expo'
import App from './src'

LogBox.ignoreLogs([])

registerRootComponent(App)
