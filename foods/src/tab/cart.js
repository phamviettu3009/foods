import React, { useState , useEffect } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ItemCart from '../components/item/itemCart'
import { IsLandScape } from "../components/Landscape/isLandscape"
import { useDispatch, useSelector } from 'react-redux';
import { getListProductsToCart } from '../actions';

let isTablet = false

const windowWidth = Dimensions.get('window').width
if (windowWidth >= 550) {
  isTablet = true
}

function CartTab() {
  const [col, SetCol] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getListProductsToCart())
  }, [])

  const data = useSelector(state => state);

  const footerComponent = () => {
    return(
      <View style={styles.container}>
        <View style={styles.line}></View>
        <View style={styles.box_1}>
          <Text style={styles.total_title}>TOTAL</Text>
          <View style={styles.box_2}>
            <Text style={styles.price}>{data?.getProductToCart?.price}</Text>
            <Text style={styles.unit}>euros</Text>
          </View>
        </View>
        <View style={styles.btn_box}>
          <TouchableOpacity 
            disabled={data.getProductToCart.validate ? false : true}
          >
            <View opacity={data.getProductToCart.validate ? 1 : 0.5} style={styles.btn}>
              <Text style={styles.btn_text}>VALIDATE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
 
  return (
    <View
      onLayout={() => IsLandScape(res_col => SetCol(res_col))}
      style={{
        flex: 1
      }}>
      <FlatList
        data={data?.getProductToCart?.list}
        numColumns={isTablet ? 2 : col}
        key={col}
        renderItem={
          ({ item }) => (
            <ItemCart data={item} />
          )
        }
        keyExtractor={item => item.id}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    marginBottom: 150
  },
  line: {
    borderTopWidth: StyleSheet.hairlineWidth,
    margin: 30
  },
  box_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8
  },
  total_title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 8
  },
  unit: {
    fontSize: 18,
  },
  box_2: {
    flexDirection: "row",
    alignItems: "center"
  },
  btn_box: {
    alignItems: "center",
    paddingVertical: 20,
  },
  btn: {
    height: 50,
    width: Dimensions.get('window').width - 56,
    backgroundColor: "white",
    borderRadius: (Dimensions.get('window').width - 56) / 2,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",  
  },
  btn_text: {
    fontSize: 20,
  },
})

export default CartTab
