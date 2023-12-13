import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { get } from "../utils/httpClient";
import Movies from "../components/Movies";
import { useQuery } from "@apollo/client";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const data = await get("/discover/movie");
      setMovies(data.results);
    } catch (error) {
      Alert.alert("Oops! ocurrio un error: " + error?.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.totalResulText}>Peliculas</Text> */}
      <Movies moviesList={movies} />
    </View>
  );
}

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // paddingHorizontal: 5,
    justifyContent: "center",
  },
  totalResulText: {
    textAlign: "right",
    width: "100%",
    marginTop: 20,
    paddingTop: 20,
    paddingRight: 9,
    paddingBottom: 7,
  },
  searchSection: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    paddingRight: 90,
    paddingLeft: 10,
    flex: 1 / 5,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#2C292C",
    borderBottomWidth: 0,
    paddingHorizontal: 4,
  },
  input: {
    color: "#fff",
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 7,
  },
  buttonSearch: {
    backgroundColor: "#FEBC00",
    marginBottom: 27,
  },
});
