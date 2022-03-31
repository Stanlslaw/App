import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Alert} from 'react-native';

function handleClick() { 
  Alert.alert(
    'Важное сообщение системы',
    "нажмите да или нет!",
    [
    {text: 'NO', onPress: () => alert("Попробуй еще раз")},
    {text: 'OK', onPress: () => alert("Ты гей")}
    ],
    { cancelable: false },
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text nativeID='text' style={styles.ring} onPress={handleClick}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring:{
    width: 100,
    height: 100,
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 8,
    borderStyle: "solid",
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
