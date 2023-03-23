import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyle from '../style/global';
import { StackActions } from '@react-navigation/native';

export default function ProfileScreen({ navigation, route }) {
  let language = route.params.language;
  let name = route.params.name;
  let headline = language === "french" ? "Bonjour, " + name : "Hello, " + name

  return (
    <View style={styles.container}>
      <Text style={globalStyle.headLine}>{ headline }</Text>
      <TouchableOpacity 
        style={globalStyle.primaryButton}
				onPress={() => navigation.pop()}
      >
        <Text style={globalStyle.primaryButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Note:: For reference when replacing Stack */}
      {/* <Button 
        title="Go to Third Screen with Replace"
				onPress={() => {
          navigation.dispatch(
            StackActions.replace("Third")
          )
        }}
			/> */}
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
