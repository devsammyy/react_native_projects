import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Slides from "../../components/Onboard/Slides";

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      title: "Quick & Easy Traveling",
      image: require("../../assets/images/1.jpg"),
    },
    {
      id: 2,
      title: "Explore the World",
      image: require("../../assets/images/2.jpg"),
    },
    {
      id: 3,
      title: "Feel Comfortable",
      image: require("../../assets/images/3.jpg"),
    },
  ];

  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Slides item={item} />}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
