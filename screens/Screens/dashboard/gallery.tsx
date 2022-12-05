// // export default Screen;
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Gallery } from 'react-native';
// // import Gallery from 'react-native-image-gallery';
// const Screen = ({ navigation }) => {
//     return (
//         <Gallery
//           style={{ flex: 1, backgroundColor: 'black' }}
//           images={[
//             // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
//             { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
//             { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
//             { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
//             { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
// const prefetchImage =
//   'https://upload.wikimedia.org/wikipedia/commons/0/02/Oia_dal_battello_al_tramonto_-_Santorini_-_Grecia_-_agosto_2018.jpg';



// export default Screen;
import React from 'react';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Dimensions, Image,ScrollView, TouchableOpacity  } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
const Screen = ({navigation}) => {
    const Images = [
        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
        { source: { uri: 'https://picsum.photos/200/300?random=1' } },
        { source: { uri: 'https://picsum.photos/200/300?random=2' } },
        { source: { uri: 'https://picsum.photos/200/300?random=3' } },
        { source: { uri: 'https://picsum.photos/200/300?random=4' } },
        { source: { uri: 'https://picsum.photos/200/300?random=5' } },
        { source: { uri: 'https://picsum.photos/200/300?random=6' } },
        { source: { uri: 'https://picsum.photos/200/300?random=7' } },
        { source: { uri: 'https://picsum.photos/200/300?random=8' } },
        { source: { uri: 'https://picsum.photos/200/300?random=9' } },
        { source: { uri: 'https://picsum.photos/200/300?random=10' } },
    ]
    return (
        
            <ScrollView>
                <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {Images.map((imagee, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => { navigation.push("Image",imagee) }}>
                            <Image source={imagee.source} style={
                                {
                                    height: deviceHeight / 3.1,
                                    width: deviceWidth / 3.1,
                                    borderRadius: 10,
                                    margin: 2
                                }
                            } />
                        </TouchableOpacity>
                    )

                })}
                </View>
            </ScrollView>
        
    )
}
export default Screen;