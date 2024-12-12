import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

const SingleProduct = ({ route }) => {
  const { productId } = route.params;

  return (
    <View>
      <Text>Product ID: {productId}</Text>
      <View>
      <Image
          style={styles.ProductSingleImg}  
          source={{ uri: 'https://n-img0.junaroad.com/uiproducts/20409246/zoom_0-1697158652.jpg' }}
        />  

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductSingleImg : {
    width:'100%',
    aspectRatio: 0.7532,
  }
});

export default SingleProduct;
