import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <MainStack/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
