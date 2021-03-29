import React, { useState , useEffect } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import ItemProduct from '../components/item/itemProduct';
import { IsLandScape } from "../components/Landscape/isLandscape"
import { useDispatch, useSelector } from 'react-redux';
import { fetchListProducts } from '../actions';

let isTablet = false;
const windowWidth = Dimensions.get('window').width

if (windowWidth >= 550) {
  isTablet = true
}

function ProductTab() {
  const [col, SetCol] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListProducts())
  }, [])

  const data = useSelector(state => state?.getProducts?.listProducts?.data);

  return (
    <View
      onLayout={() => IsLandScape(res_col => SetCol(res_col))}
      style={{
        flex: 1,
      }}>
      <FlatList
        data={data}
        numColumns={isTablet ? 2 : col}
        key={col}
        renderItem={({item}) => <ItemProduct data={item} />}
        keyExtractor={key => key.id}
      />
    </View>
  );
}
export default ProductTab;
