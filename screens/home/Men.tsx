import React, { useState, useEffect } from 'react';
import { ScrollView, Image, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements' 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import ImageSlider from './menSlider'; 
import MenProductList from './MenProductList';
import { existsInArray } from '../../src/utilities/utils';
import { addToWishlist } from '../../src/reducers/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  rating: Rating; 
}

type ItemType = {
  id: number;
  title: string;
  description: string;
  price : number
};

const images = [ 
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Alll' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'T-Shirt' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Shirts' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Jeans' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Trousers' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Ethinic' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Footwear' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Watches' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Home' },
    { src: 'https://i.ibb.co/CJYDDXb/faketshirt.webp', name: 'Accessory' }
  ];
  
  


const Men = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);


    const handleAddToWishlist = (item: ItemType) => {
      console.log('on men product list items first ')
      console.log(item);
      console.log('on men product list items second')
      dispatch(addToWishlist(item));
    }; 


    useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

     
  
  return (
    <ScrollView style={{backgroundColor:'white', flex:1}}>
    <View style={styles.container}>       
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.scrollViewContainer}
    >
    {images.map((img, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: img.src }}
              style={styles.image}
            />
             <View style={styles.imageText}>
            <Text style={styles.imageTextP} >{img.name}</Text>
            </View>
          </View>
        ))}

    </ScrollView>
  </View>
  <View> <Text style={styles.productcontainerHeading}>Trending shirts</Text></View>
  <View style={styles.productcontainer}>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewContainer}
  >
    {products.map((product, index) => (
      <View key={index} style={styles.productImageContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/7k5WvGv/dummy-shirt.webp' }}
          style={styles.productImage}
        /> 
             <Badge
                textStyle={styles.ratingText}
                badgeStyle={styles.ratingBadgeText}
                containerStyle={styles.ratingBadge}
                value={product.rating.rate}
            />
            <View style={styles.wishlistdiv} > 
          <TouchableOpacity style={styles.wishlistIconTouch}  onPress={() =>handleAddToWishlist(product)}>
            <FontAwesomeIcon icon={faHeart} size={12} color={existsInArray(wishlistItems, product.id) ? "#900C3F" : "#c7c7c7"} />
          </TouchableOpacity>
      </View>
        
         <View style={styles.productImageText}>
         {product && <Text style={styles.productImageTextP}>Rs {product.price}</Text>}
        </View>
      </View>
    ))}
  </ScrollView>
</View>
<View style={styles.textBannerBanner}><Text style= {styles.hBannerTextOne}>It' Going Viral</Text><Text style= {styles.hBannerTextTwo}>Trend of the moment</Text></View>

<View style={styles.menProductListMain}><MenProductList/></View> 

</ScrollView>

  );
};
const styles = StyleSheet.create({
    container: {
        height: (Dimensions.get('window').width / 6 + 40),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#eee' 
    },
    scrollViewContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: Dimensions.get('window').width / 6, 
      height: Dimensions.get('window').width / 6, 
      resizeMode: 'cover', 
      marginRight: 5,
      marginLeft: 5,
      borderRadius:10,
    },
    imageContainer: {
        borderRadius:10, 
    },
    imageText : {
        alignItems: 'center', 
        display:'flex',
        width:'100%'
    },
    imageTextP : {
        fontSize: 10, 
    },
    productcontainer: {
        height: (Dimensions.get('window').width / 2 + 20), // Set a fixed height for the container
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 10,
    },
    productImageContainer: {
        borderRadius:20,
    },
    productImage :{
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 2, 
        resizeMode: 'cover',
        marginRight: 5, 
        marginLeft: 5,
        borderRadius:10,
    },
    productcontainerHeading : {
        marginTop:10,
        marginLeft: 5,
        marginBottom:5,
    },
    productImageText :{ 
        width:'100%',
        marginLeft: 5,
        marginTop: 2,
    },
    productImageTextP : {
        fontSize: 13, 
    },
    ratingBadge : {
        position:'absolute',
        bottom:30,
        left:15,   
    },
    ratingBadgeText : {
        backgroundColor:'#ffffffc9', 
    },
    ratingText : {
        color:'#000'
    },
    wishlistdiv : {
        position: 'absolute', 
        borderRadius:50,
        backgroundColor:'#fff', 
        top:10,
        right:15
    },
    textBannerBanner : {
      flexDirection:'column',
      padding:16,
      justifyContent:'center',
      display: 'flex',
      backgroundColor:'#dbd5c875', 
      color:'#333'
    },
    hBannerTextOne : {
      fontSize:28, 
      textAlign:'center',
      fontWeight:500
    },
    hBannerTextTwo : {
      fontSize:12,
      textAlign:'center',
      fontWeight:300,
      marginTop:8 
    },
    menSliderMain : {
      marginTop: 20,
      marginBottom: 20
    },
    menProductListMain : {

    },
    wishlistIconTouch : {
      padding:6,
    }
  });
export default Men;
