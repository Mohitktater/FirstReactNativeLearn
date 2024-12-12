import React, { useState, useRef } from 'react';
import { ScrollView,Button, Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel'; 
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Index() { 
    const MenCaroselimages = [ 
        { src: 'https://i.ibb.co/0Fq7wdm/men-Slider-1.webp'},
        { src: 'https://i.ibb.co/MhHqj29/men-Slider-2.webp' },
        { src: 'https://i.ibb.co/TtwC3Pt/men-Slider-3.webp' }
      ];
    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const data = [...new Array(3).keys()];
     
     
    

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                    ref={carouselRef}
                    loop={true}
                    autoPlay={true}
                    width={screenWidth}
                    height={screenWidth}
                    data={data}
                    onSnapToItem={(index) => setIndex(index)}
                    renderItem={({ item, index }) => (
                    <View style={styles.slide}>
                        <Image
                            source={{ uri: MenCaroselimages[index].src }}
                            style={styles.homeCarouselImage}
                        />
                    </View>
        )}

            />
            

        </View>
    );
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      },
      homeCarouselImage: {
        width: '100%', 
        height: '100%',
        resizeMode: 'cover', 
        borderRadius:10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
      },
    
 })

export default Index;
