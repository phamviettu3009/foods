import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BasicModal({ title, content }) {
    return (
        <View>
            <Text style={styles.titleModal}>{title}</Text>
            <Text style={styles.contentModal}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleModal: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10
    },
    contentModal: {
        fontSize: 16
    },
})

export default BasicModal

