import React from "react";
import {StyleSheet,View,Image} from "react-native";
const Starbar = (props) => {
  if (props.star == 1) {
    return (
      <View style={{flexDirection: "row"}}>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
      </View>
    );
  } else if (props.star == 2) {
    return (
      <View style={{flexDirection: "row"}}>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
      </View>
    );
  } else if (props.star == 3) {
    return (
      <View style={{flexDirection: "row"}}>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
      </View>
    );
  } else if (props.star == 4) {
    return (
      <View style={{flexDirection: "row"}}>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_empty.png?raw=true"}}/>
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={{flexDirection: "row"}}>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
        <Image style={styles.starStyle}source={{uri: "https://github.com/yutinglin23/image/blob/main/icon_star_filled.png?raw=true"}}/>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  starStyle:{
    width:14,
    height:14,
    marginRight:4,
    marginBottom:8,
  }
});

export default Starbar;
