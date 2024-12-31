import {
  FlatList,
  View,
  Text,
  ListRenderItem,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import data from "@/assets/data.json";
import { Ionicons } from "@expo/vector-icons";
import useCartStore from "@/store/cartStore";

export default function TabOneScreen() {
  const { reduceProduct, addProduct } = useCartStore();

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
        <Text>${item.price}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => reduceProduct(item)}>
          <Ionicons name="remove" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => addProduct(item)}>
          <Ionicons name="add" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
    alignItems: "center",
    padding: 5,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
