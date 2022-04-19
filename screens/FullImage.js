import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

function FullImage({ route }) {

    return (
        <Image source={{ uri: route.params.fullScreenImage }} style={styles.image} />
    );
}

export default FullImage

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    }
});
