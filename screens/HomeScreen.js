import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import globalStyle from '../style/global';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={globalStyle.headLine}>Welcome to Your Test App</Text>
      <View style={globalStyle.buttonGroup}>
        <TouchableOpacity 
          style={globalStyle.primaryButton}
          onPress={() => navigation.navigate("ProfileScreen", { language: "french", name: "John Doe" })}
        >
          <Text style={globalStyle.primaryButtonText}>Profile french</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={globalStyle.primaryButton}
          onPress={() => navigation.navigate("ProfileScreen", { language: "english", name: "John Doe" })}
        >
          <Text style={globalStyle.primaryButtonText}>Profile english</Text>
        </TouchableOpacity>
      </View>
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
  }
});
