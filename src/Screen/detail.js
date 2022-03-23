import React from "react";
import {StyleSheet,ScrollView,Text,View,Image,Linking,} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Starbar from "../Starbar";

const Detail = ({ route }) => {
  const { title, artist, price, url, image, descriptions ,star} = route.params;
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.titleIntroduce}>{title}</Text>
        <Text style={styles.introduceStyle}>{artist}</Text>
        <View style={styles.valueStyle}>
          <Starbar star={star} />
          <Text>{star}.0 <Text style={{ color: "gray" }}>/ 5.0</Text></Text>
        </View>
       
        <Text style={styles.describeStyle}>{descriptions}</Text>
        <Pressable
          onPress={() => Linking.openURL(url)}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>BUY NOW FOR ${price}</Text>

        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 300,
    width: 210,
    alignSelf: "center",
    marginTop: 8,
  },
  cardContainerStyle: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleIntroduce: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  introduceStyle: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
    color: "gray",
  },
  describeStyle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
    color: "#131313",
  },
  buttonStyle: {
    width: 190,
    height: 36,
    backgroundColor: "#6200EE",
    alignSelf: "center",
    marginTop: 28,
    borderRadius: 4,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 35,
    letterSpacing: 1.2,
    fontWeight: "500",
  },
  valueStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Detail;