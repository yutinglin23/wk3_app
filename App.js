import { StyleSheet, StatusBar, SafeAreaView, FlatList } from "react-native";
import Navigation from "./src/navigation/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});