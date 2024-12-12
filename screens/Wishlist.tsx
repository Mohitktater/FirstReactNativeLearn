import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UpdateWishlistByDeleteOne } from "../src/reducers/wishlistSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / 2;

  const handlePress = () => {
    Alert.alert("Button pressed!");
  };

  const handleRemoveFromWishlist = (product) => {
    dispatch(UpdateWishlistByDeleteOne(product));
  }

  return (
    <ScrollView style={wishliststyles.scrollView}>
      <View>
        <Text style={wishliststyles.wishlistheading}>Wish List Products</Text>
      </View>
      <View style={wishliststyles.container}>
        {wishlistItems.map((item) => (
          <View
            key={item.id}
            style={[wishliststyles.item, { width: itemWidth }]}
          >
            <Image
              style={wishliststyles.imagemenslist}
              source={{
                uri: "https://n-img0.junaroad.com/uiproducts/20409246/zoom_0-1697158652.jpg",
              }}
            />
            <View  style={wishliststyles.wishlistCancellIcon}>
              <TouchableOpacity style={wishliststyles.wishlistCancellIconTouch} onPress={handleRemoveFromWishlist}>
                <FontAwesomeIcon icon={faTimes} size={16} color="#444" />
              </TouchableOpacity>
            </View>
            <View style={wishliststyles.WishproductDescriptionMain}>
              <View style={wishliststyles.WishproductBrandName}>
                <Text style={wishliststyles.WishproductBrandNameOne}>By</Text>
                <Text style={wishliststyles.WishproductBrandNameTwo}>
                  Jain Cloths
                </Text>
              </View>

              <View>
                <Text
                  style={wishliststyles.productDescription}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
              </View>
              <View>
                <Text numberOfLines={1}>Rs {item.price}</Text>
              </View>
            </View>
            <View style={wishliststyles.addToCartContainer}>
              <TouchableOpacity
                style={wishliststyles.addToCartbutton}
                onPress={handlePress}
              >
                <Text style={wishliststyles.addToCartbuttonText}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const wishliststyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", 
  },
  wishlistheading: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    textTransform: "uppercase",
    color: "#444",
    marginBottom: 20,
    borderStyle: "dashed",
    borderColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
  item: {
    padding: 0,
    borderColor: "#fff",
    borderWidth: 0.1,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
  },
  imagemenslist: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.7532,
  },
  WishproductDescriptionMain: {},
  WishproductBrandName: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  WishproductBrandNameOne: {
    color: "#666",
    fontSize: 11,
  },
  WishproductBrandNameTwo: {
    color: "#282828",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1.2,
  },
  WishproductDescription: {
    fontSize: 11,
    color: "#666",
    letterSpacing: 1.5,
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  productDescription: {
    margin: 0,
  },
  wishlistCancellIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 0.1,
    borderColor: "#c7c7c7",
    opacity: 0.6,
  },
  wishlistCancellIconTouch : {
    padding: 6,
  },
  addToCartContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "auto",
    marginTop: "5%",
    marginBottom: "5%",
  },
  addToCartbutton: {
    width: "100%",
  },
  addToCartbuttonText: {
    color: "#fff",
    fontSize: 13,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#a0eb14",
    padding: 8,
    borderRadius: 4,
    letterSpacing: 1.5,
    fontWeight: 500,
  },
});

export default WishlistPage;
