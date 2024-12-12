import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image ,ScrollView} from 'react-native';
import { useSelector } from 'react-redux';

const Test = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const screenWidth = Dimensions.get('window').width; 
    const itemWidth = (screenWidth / 2) - 10; 
 
  return (
    <ScrollView style={styles.scrollView}>
        <View><Text style={styles.wishlistheading}>Wish List Products</Text></View> 
    <View style={styles.container}>
      {wishlistItems.map(item => (
        <View key={item.id} style={[styles.item, { width: itemWidth }]}>
              <Image
                style={styles.imagemenslist}
                source={{ uri: 'https://n-img0.junaroad.com/uiproducts/20409246/zoom_0-1697158652.jpg' }}
              /> 
          <View style={styles.productDescriptionMain}>
        <View style={styles.productBrandName}>
        <Text style={styles.productBrandNameOne}>By</Text> 
        <Text style={styles.productBrandNameTwo}>Jain Cloths</Text>
        </View>

        <View >
        <Text style={styles.productDescription} numberOfLines={1}>{item.title}
        </Text>
        </View>
        <View >
        <Text numberOfLines={1}>Rs {item.price}
        </Text>
        </View>
        </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:1,
    marginLeft:5,
    marginRight:5,
  },

  wishlistheading :{
    marginLeft:5,
    marginRight:5, 
    paddingTop:10,
    paddingBottom:10,
    fontSize:16,
    textTransform:'uppercase',
    color:'#444',
    borderBottomWidth:1
  },

  item: {
    padding: 0, 
    borderColor: '#c7c7c7',
    borderWidth:0.1,
    backgroundColor: '#ddd',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius:10
  },

  text: {
    fontSize: 16,
  },

  imagemenslist : {
    width: '100%',
    height: undefined, 
    aspectRatio: 0.7532,
    borderRadius:10
  },
  productDescriptionMain : { 
    
  },
  productBrandName : {
    flexDirection: 'row', 
    justifyContent:'flex-start'
  },
  productBrandNameOne : {
    color:'#666',
    fontSize:11,
  },
  productBrandNameTwo : {
    color:'#282828',
    textTransform:'uppercase',
    fontSize:11,
    letterSpacing:1.2
  },
  productDescription : {
    fontSize:11,
    color:'#666',
    letterSpacing:1.5
  }
});

export default Test;
