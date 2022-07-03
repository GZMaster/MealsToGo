import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { MaterialIcons } from "@expo/vector-icons";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => (
              <MaterialIcons
                {...props}
                name="breakfast-dining"
                size={24}
                color="black"
              />
            )}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)} 
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Toast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => (
              <MaterialIcons
                {...props}
                name="lunch-dining"
                size={24}
                color="black"
              />
            )}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Toast" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => (
              <MaterialIcons
                {...props}
                name="dinner-dining"
                size={24}
                color="black"
              />
            )}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Toast" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => (
              <MaterialIcons
                {...props}
                name="local-drink"
                size={24}
                color="black"
              />
            )}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Toast" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
