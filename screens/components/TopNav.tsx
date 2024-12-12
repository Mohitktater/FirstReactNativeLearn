import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge} from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';  
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const TopBar = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const totalwishlistItems = wishlistItems.reduce((acc, item) => acc + item.quantity, 0);
    const navigation = useNavigation();

    console.log(totalwishlistItems);
  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Jain Clothss </Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            size={24} 
            color='#999'
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconMargin} onPress={goToWishlist}>
          <FontAwesomeIcon 
          icon={faHeart} 
          size={24} 
          color='#999'
          /> 
           {wishlistItems.length > 0 ? (
          <Badge
            status="error"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            badgeStyle={styles.WishlistBadgeStyle}
            value={totalwishlistItems}
          />
           ):('') }
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 15,
  }, 
  WishlistBadgeStyle : {
    backgroundColor: '#900C3F',
    opacity:0.8,
    borderWidth:0,
  }
});

export default TopBar;
