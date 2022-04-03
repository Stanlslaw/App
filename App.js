import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Хуй</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height:'100%'
  }
});
