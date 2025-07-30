import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipe({ categories, foods }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View testID="recipesDisplay">
        <FlatList
          data={foods}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item, index }) => (
            <ArticleCard
              key={index}
              item={item}
              index={index}
              navigation={navigation}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const ArticleCard = ({ item, index, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { paddingLeft: 20, paddingRight: 15 }]}
      testID="articleDisplay"
      onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.recipeImage }} style={styles.articleImage} />
      <Text style={styles.articleText} numberOfLines={1}>
        {item.recipeName}
      </Text>
      <Text style={styles.articleDescription} numberOfLines={2}>
        {item.recipeInstructions}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4), // mx-4 equivalent
    marginTop: hp(2),
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginBottom: hp(1.5),
  },
  loading: {
    marginTop: hp(20),
  },
  cardContainer: {
    justifyContent: "center",
    marginBottom: hp(1.5),
    flex: 1, // Allows cards to grow and fill space evenly
  },
  articleImage: {
    width: "100%",
    height: hp(20), // add height for the image
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.05)", // bg-black/5
  },
  articleText: {
    fontSize: hp(1.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  articleDescription: {
    fontSize: hp(1.4),
    color: "#6B7280", // gray-500
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  row: {
    justifyContent: "space-between", // Align columns evenly
  },
});
