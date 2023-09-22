import { Suspense } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  SafeAreaView,
  Image,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function App() {
  const onPress = () => {
    console.log('hello world')
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Suspense fallback={<ActivityIndicator />}>
          <View style={styles.wrapper}>
            <Text style={styles.item}>First</Text>
            <Text style={styles.item}>Second</Text>
          </View>
          <Image source={{ uri: '' }} />
          <Button onPress={onPress} title="Button" />
          <View>
            <Text>hello world!</Text>
          </View>
          <View>
            <Text>I'm Lantz Shaw!</Text>
          </View>
          <View>
            <Text>javascript</Text>
          </View>
        </Suspense>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: '#f40',
  },
  item: {
    height: 20,
    width: 20,
    backgroundColor: '#000',
  },
})
