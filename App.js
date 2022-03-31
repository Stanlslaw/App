import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import nykon from './src/shishoya';

export default function nykon() {
  return(
      <Text style={{fontSize: 40 + 'px', color: 'purple', textAlign: 'center'}}>Я НИКОН ЧИГОЯ РАБОТАЮ 7 ДНЕЙ БЕЗ ВЫХОДНЫХ И ЗАРПЛАТЫ</Text>
  );
}

export default function App() {
  nykon();
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
