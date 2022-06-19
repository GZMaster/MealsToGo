import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "some address",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ url: photos[0] }}
        />
        <Card.Content>
          <Title style={styles.title}>{name}</Title>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
