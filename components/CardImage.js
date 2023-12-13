import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ movie }) => {
  console.log("🚀 ~ file: CardImage.js:6 ~ CardImage ~ movie:", movie);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardImage}
      onPress={() => navigation.navigate("MovieDetail", { movie })}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w200${movie?.poster_path}`,
        }}
        style={{ width: "100%", height: 200, borderRadius: 3 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    width: "49.5%",
    margin: 4,
    justifyContent: "space-between",
    backgroundColor: "#2c292c",
    // borderWidth: 0,
    borderRadius: 10,
  },
});

export default CardImage;
