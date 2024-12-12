import React, { useState, useEffect,  } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image,TouchableOpacity  } from 'react-native';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addToWishlist } from '../../src/reducers/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { existsInArray } from '../../src/utilities/utils';
import { useNavigation } from '@react-navigation/native';




interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  rating: Rating; 
}

type ItemType = {
  id: number;
  title: string;
  description: string;
  price : number
};

const MenProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);
  const screenWidth = Dimensions.get('window').width; 
  const numColumns = screenWidth >= 480 && screenWidth <= 600 ? 3 : 2;

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToWishlist = (item: ItemType) => {
    console.log('on men product list items first ')
    console.log(item);
    console.log('on men product list items second')
    dispatch(addToWishlist(item));
  }; 
  const HandleGoToProductPage = (id) => {
    navigation.navigate('Product', { productId: id });

  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const renderItem = ({ item }: { item: ItemType }) => (
   
    <View style={[styles.item, { width: `${(100 / numColumns)  - 0}%` },]}>
       <TouchableOpacity onPress={() =>HandleGoToProductPage(item.id)}>
     <Image
          style={styles.imagemenslist}  
          source={{ uri: 'https://n-img0.junaroad.com/uiproducts/20409246/zoom_0-1697158652.jpg' }}
        />  
        <View style={styles.wishlistIcon} > 
          <TouchableOpacity style={styles.wishlistIconTouch}  onPress={() =>handleAddToWishlist(item)}>
            <FontAwesomeIcon icon={faHeart} size={14} color={existsInArray(wishlistItems, item.id) ? "#900C3F" : "#c7c7c7"} />
          </TouchableOpacity>
      </View>

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
        </TouchableOpacity>
    </View>

  );

  return (
    <FlatList
    data={products}
      renderItem={renderItem} 
      numColumns={numColumns}
      key={numColumns}
      contentContainerStyle={styles.container} 
    />
  );
};

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'flex-end', 
    paddingLeft:5,
    paddingRight:5, 
    display:'flex',
    flexDirection:'column',
    gap:10, 
  },
  item: {
    margin: 0.5,
    paddingLeft: 0,
    backgroundColor: '#fff', 
    position:'relative'
  },
  productDescriptionMain :{
    marginLeft:5
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  imagemenslist :{
    width: '100%', 
    height: 280,
    resizeMode: 'cover', 
    borderRadius:2,
  },
  wishlistIcon : {
    position:'absolute',
    top:20,
    right:20,
    
    backgroundColor:'#fff',
    borderRadius:20,
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
  },
  wishlistIconTouch : {
    padding:8,
  }
});

export default MenProductList;
