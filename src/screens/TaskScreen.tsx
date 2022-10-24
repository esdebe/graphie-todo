import { View, Text, StyleSheet, Pressable } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgab(255,255,255,1)',
    height: '100%',
    width: '100%',
  },
  statusCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  statusCardContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusCardCount: {
    color: 'rgba(0,0,0,0.5)',
    marginRight: 8,
  },
  statusCardRound: {
    borderRadius: 8,
    height: 16,
    marginRight: 8,
    width: 16,
  },
  statusCardTitle: {
    flex: 1,
  },
  sumCard: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    display: 'flex',
    padding: 16,
  },
  sumCardContainer: {
    padding: 8,
    width: '50%',
  },
  sumCardCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sumCardIcon: {},
  sumCardIconContainer: {
    alignItems: 'center',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  sumCardTitle: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 18,
  },
  sumCardTop: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  sumRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

const sumArray = [
  {
    title: 'Pending Task',
    count: 0,
    icon: () => (
      <IonIcons size={20} style={styles.sumCardIcon} name="md-time-outline" color="white" />
    ),
    colors: 'orange',
  },
  {
    title: 'Active Projects',
    count: 0,
    icon: () => <IonIcons size={20} style={styles.sumCardIcon} name="folder" color="white" />,
    colors: 'green',
  },
  {
    title: 'Total Task',
    count: 0,
    icon: () => (
      <IonIcons size={20} style={styles.sumCardIcon} name="md-time-outline" color="white" />
    ),
    colors: 'red',
  },
  {
    title: 'Teams',
    count: 0,
    icon: () => (
      <IonIcons size={20} style={styles.sumCardIcon} name="md-time-outline" color="white" />
    ),
    colors: 'blue',
  },
]

const status = [
  {
    title: 'Proposed',
    count: 0,
    color: 'blue',
  },
  {
    title: 'In Progress',
    count: 0,
    color: 'orange',
  },
  {
    title: 'Review',
    count: 0,
    color: 'red',
  },
  {
    title: 'Completed',
    count: 0,
    color: 'green',
  },
]

function TaskScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sumRow}>
        {sumArray.map((item, index) => (
          <View style={styles.sumCardContainer} key={index}>
            <View style={styles.sumCard}>
              <View style={styles.sumCardTop}>
                <View style={[styles.sumCardIconContainer, { backgroundColor: item.colors }]}>
                  <item.icon />
                </View>
                <Text style={styles.sumCardCount}>{item.count}</Text>
              </View>
              <Text style={styles.sumCardTitle}>{item.title}</Text>
            </View>
          </View>
        ))}
      </View>
      {status.map((item, index) => (
        <View key={index} style={styles.statusCardContainer}>
          <Pressable style={styles.statusCard}>
            <View style={[styles.statusCardRound, { backgroundColor: item.color }]} />
            <Text style={styles.statusCardTitle}>{item.title}</Text>
            <Text style={styles.statusCardCount}>Task {item.count}</Text>
            <IonIcons name="chevron-forward" size={24} color="rgba(0,0,0,0.6)" />
          </Pressable>
        </View>
      ))}
    </View>
  )
}

export { TaskScreen }
