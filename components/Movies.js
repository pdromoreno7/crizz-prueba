import { View, Text, FlatList } from "react-native";
import React from "react";
import CardImage from "./CardImage";

const Movies = ({ moviesList }) => {
  const renderItems = ({ item }) => <CardImage movie={item} />;

  return (
    <View>
      <FlatList
        data={moviesList}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Movies;
