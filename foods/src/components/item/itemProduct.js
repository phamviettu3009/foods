import React,  { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { increaseTheNumberOfProduct, reduceTheNumberOfProduct, addItemProductToCart } from '../../actions';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

let WIDTH = windowWidth/2
let FONT_SIZE_PRICE = 14
let FONT_SIZE_NAME_PRODUCT = 16
let FONT_SIZE_NUMBER_PRODUCT = 14
if (windowWidth >= 550) {
    WIDTH = WIDTH/2
    FONT_SIZE_PRICE = 18
    FONT_SIZE_NAME_PRODUCT = 22
    FONT_SIZE_NUMBER_PRODUCT = 20
}


function ItemProduct({data}) {
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
                <View style={styles.box_2}>
                    <View style={styles.box_3}>
                        <TouchableOpacity onPress={() => dispatch(reduceTheNumberOfProduct({ id: data.id }))}>
                            <View style={styles.plus_or_minus}>
                                <Text>-</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.number_product}>{data.quantity}</Text>
                        <TouchableOpacity onPress={() => dispatch(increaseTheNumberOfProduct({ id: data.id }))}>
                            <View style={styles.plus_or_minus}>
                                <Text>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box_3}>
                        <TouchableOpacity onPress={() => dispatch(addItemProductToCart({id: data.id, name: data.name, price: data.price, quantity: data.quantity, image: data.image}))}>
                            <View style={styles.box_cart_icon}>
                                <Image
                                    style={styles.icon_cart}
                                    source={require("../../assets/images/cart-product.png")}
                                >      
                                </Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const commomStyle = {
    box_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
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
    box_2: {
        flex: 2,
        flexDirection: "row",
        alignItems:"center"
    },
    box_3: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    plus_or_minus: {
        width: WIDTH/8,
        height: WIDTH/8,
        borderRadius: WIDTH/16,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        ...commomStyle.box_shadow
    },
    box_cart_icon: {
        width: WIDTH/4,
        height: WIDTH/4,
        borderRadius: WIDTH/8,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center",
        ...commomStyle.box_shadow
    },
    icon_cart: {
        width: "50%",
        height: "50%"
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
    number_product: {
        fontSize: FONT_SIZE_NUMBER_PRODUCT,
    }
})

export default ItemProduct