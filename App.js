import { Provider as PaperProvider } from 'react-native-paper';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { View } from 'react-native'
import Screens from './src/Index';
import styles from './src/styles/App.styles';
import { Header } from './src/components/business/header/Header';
export default function App() {
  return (
    <PaperProvider>
     <View style={styles.global} >
     <Header />
     <Screens />
     <ExpoStatusBar />
     </View> 
    </PaperProvider>
  );
}
