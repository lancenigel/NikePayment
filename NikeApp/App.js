import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import products from "./src/data/products";
import ProductsScreen from "./src/screens/ProductsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen></ProductsScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
