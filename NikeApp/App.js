import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import products from "./src/data/products";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetailsScreen></ProductDetailsScreen>
      {/* <ProductsScreen></ProductsScreen> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
