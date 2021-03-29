import React,  { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../actions/index'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

let WIDTH = windowWidth/2
let FONT_SIZE_PRICE = 14
let FONT_SIZE_NAME_PRODUCT = 16
let FONT_SIZE_NUMBER_PRODUCT = 15
if (windowWidth >= 550) {
    WIDTH = WIDTH/2
    FONT_SIZE_PRICE = 18
    FONT_SIZE_NAME_PRODUCT = 22
    FONT_SIZE_NUMBER_PRODUCT = 20
}

function ItemCart({data}) {
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    source={{uri: data.image == "" ? "https://manhhunggroup.com.vn/wp-content/themes/biss-child/img/no-image-1.jpg" : data.image}}
                />
                <View style={styles.box_price}>
                    <Text style={styles.price}>{data.price}</Text>
                    <Text style={styles.price_unit}> euros</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.number_product}>{data.quantity}</Text>
                <TouchableOpacity style={styles.btn_remove} onPress={() => dispatch(removeItemFromCart({id: data.id, price: data.price, quantity: data.quantity}))}>
                    <Text style={styles.text_btn_remove}>REMOVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 8,
    },
    image: {
        height: (WIDTH - 20) / 1.6,
        width: WIDTH - 20,
        backgroundColor: "gray",
        borderRadius: 20
    },
    price: {
        fontSize: FONT_SIZE_PRICE,
        fontWeight: "bold",
    },
    price_unit: {
        fontSize: FONT_SIZE_PRICE,
    },
    box_price: {
        flex: 1,
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "center",
    },
    box: {
        height: (WIDTH - 20) / 1.6,
        flex: 1,
        alignItems: "center"
    },
    name: {
        flex: 1,
        textAlign: "center",
        fontSize: FONT_SIZE_NAME_PRODUCT,
        paddingHorizontal: 30,
        fontWeight: "500",
        paddingTop: 10,
        textTransform: "uppercase"
    },
    number_product: {
        flex: 1,
        textAlign: "center",
        fontSize: FONT_SIZE_NUMBER_PRODUCT
    },
    btn_remove: {
        flex: 0.8,
        backgroundColor: "royalblue",
        width: WIDTH/2,
        borderRadius: WIDTH/4,
        justifyContent: "center",
        alignItems: "center"
    },
    text_btn_remove: {
        color: "white"
    }
})

export default ItemCart