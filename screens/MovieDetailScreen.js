import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const [movies, setMovies] = useState([]);

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
          height: 350,
          width: "100%",
        }}
      />
      <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
        <Text style={styles.title}>{movie?.original_title}</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={styles.rating}>
            <Text style={styles.info}>Rating: {movie?.vote_average}</Text>
          </View>
          <Text style={styles.info}>{movie?.release_date}</Text>
        </View>

        <Text style={styles.desciption}>{movie?.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  desciption: {
    fontSize: 15,
  },
  info: {
    fontSize: 12,
    fontWeight: "bold",
  },
  rating: {
    backgroundColor: "#EAA82D",
    width: "50%",
    alignItems: "center",
    color: "#ffff",
    padding: 10,
    borderRadius: 50,
  },
});

export default MovieDetailScreen;
