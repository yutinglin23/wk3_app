import React from "react";
import {StyleSheet,Text,View,Image,Pressable} from "react-native";
import Starbar from "../Starbar";
const Popular = ({ book, navigation }) => {
  return (
    <View style={{ flexDirection: "column", marginLeft: 20}}>
      <View style={styles.cardContainerStyle}>
        <Pressable onPress={() => navigation.navigate("Detail", book)}>
          <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{ uri: book.image }} />
          </View>
        </Pressable>
      </View>
      
      <View style={styles.headerContainerStyle}>
        <Starbar star={book.star} />
        <Text style={styles.headerTitleStyle}>{book.title}</Text>
        <Text style={styles.headerContentStyle}>{book.artist}</Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginTop: 16,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: 130,
  },
  headerTitleStyle: {

    fontSize: 16,
    fontWeight: "600",
    width:180,
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: "black",
    opacity: 0.5,
    marginTop: 8,
    
  },
  cardSectionStyle: {
    marginBottom:16,
    
  },
  imageStyle: {
    height: 200,
    width: 140,
    marginRight:16,

  },

});

export default Popular;