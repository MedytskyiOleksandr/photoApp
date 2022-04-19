import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from "@react-navigation/native";

function List({ posts }) {
    const navigation = useNavigation()

    function selectedPhotoHandler(id, fullImage, width, height) {
        navigation.navigate('Image', {
            imageId: id,
            fullScreenImage: fullImage,
            imageWidth: width,
            imageHeigth: height
        })
    }

    return (
        <FlatList
            style={styles.list}
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem item={item} onSelect={selectedPhotoHandler} />} />
    )
}

export default List

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 10,
    },
})