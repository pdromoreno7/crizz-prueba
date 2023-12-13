import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./screens/MovieList";
import MovieDetailScreen from "./screens/MovieDetailScreen";

const client = new ApolloClient({
  uri: "https://api.themoviedb.org/3",
  cache: new InMemoryCache(),
  // headers: {
  //   Authorization:
  //     "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWU5NmY3YzM2YWIwZmU5Njc1MDk2N2U3MzhjMmZhMSIsInN1YiI6IjY1N2EwOGNmMjBlY2FmMDBjNjlhNTc2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gRpeBexGJEmqy-yTvRmxqBEqi9VZfSrGqiGFLSKLj4",
  // },
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={MovieList} />
          <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
