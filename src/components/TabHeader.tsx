import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 16,
    height: 32,
    width: 32,
  },
  avatarContainer: {
    height: 32,
    width: 32,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 24,
  },
})

function TabHeader() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Tasker</Text>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="bell" size={24} />
        </View>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/300' }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export { TabHeader }
