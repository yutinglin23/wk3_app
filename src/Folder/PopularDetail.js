import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PopularDetail = (props) => {
  let { album } = props;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: album.thumbnail_image }}
        />
        <View style={styles.headerContentStyle}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image style={styles.imageStyle} source={{ uri: album.image }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    marginLeft: 2,
    marginRight: 5,
    marginTop: 18,
  },
  cardSectionStyle: {
    backgroundColor: "#fff",

  },
  imageStyle: {
    height: 200,
    width: 140,
  },
});

export default PopularDetail;