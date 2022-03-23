import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import Popular from "./Popular";
import sections from "../popular.json";

const PopularList = ({ list, navigation }) => {
  const renderSectionHeader = ({ section }) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => (
            <Popular book={item} navigation={navigation} />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />
      ) : null}
    </>
  );

  const renderItem = ({ item, section }) => {
    return null;
  };
  return (
    <SectionList
      sections={sections}
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {/*Popular */
    fontWeight: "600",
    fontSize: 24,
    marginTop:16,
    marginLeft:20,
  },
});

export default PopularList;