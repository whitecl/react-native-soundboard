import React from "react";
import { Audio } from "expo-av";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import data from "./data";

const playSound = async sound => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(sound);
    await soundObject.playAsync();
  } catch (error) {
    console.error(error)
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity
              onPress={() => playSound(item.sound)}
              style={styles.box}
            >
              <Image source={item.img} style={styles.icon} />
              <Text>{item.text}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  listItem: {
    alignItems: "center",
    width: "33%",
    height: 60
  },
  box: {
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: 80,
    height: 50
  },
  icon: {
    width: 30,
    height: 30
  }
});
