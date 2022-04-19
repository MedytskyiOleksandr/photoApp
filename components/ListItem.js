/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../constants/Colors';

function ListItem({ item, onSelect }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            key={item.id}
            onPress={onSelect.bind(this, item.id, item.fullImage, item.width, item.height)}
        >
            <Image style={styles.image} source={{ uri: item.miniImage }} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.username}</Text>
            </View>
        </Pressable>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    pressed: {
        opacity: 0.9,
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100,
    },
    info: {
        flex: 2,
        padding: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700,
    },
    address: {
        fontSize: 12,
        color: Colors.gray700,
    },
});