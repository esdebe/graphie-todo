/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native'

function NoOpScreen() {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 16 }}>
      <Text>To Do</Text>
    </View>
  )
}

export { NoOpScreen }
