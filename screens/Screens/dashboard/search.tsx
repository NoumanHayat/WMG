// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// // /* eslint-disable prettier/prettier */
// // /* eslint-disable prettier/prettier */
// // /* eslint-disable react/prop-types */
// // /* eslint-disable react-native/no-inline-styles */
// import React, { useState } from 'react';

// import {
//     ImageBackground,
//     Text,
//     Image,
//     View,
//     TouchableOpacity,
//     ScrollView,
//     Modal

// } from 'react-native';
// import { images, SIZES, COLORS } from '../../../constants';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { FAB, Card } from 'react-native-elements';
// import { SearchBar } from '../../../components/SearchBar';
// import ModalLayout from './ModalLayout';
// import LinearGradient from 'react-native-linear-gradient';



// const CustomCard = ({ navigation }) => {
//     const [visible, setVisible] = useState(false);
//     return (
//         <View>
//             <TouchableOpacity onPress={() => {
//                 setVisible(true);
//             }}>
//                 <View style={{
//                     backgroundColor: '#F7F7FE', borderRadius: 10, marginBottom: 15,
//                     padding: 5, shadowColor: 'black',
//                     shadowOffset: {
//                         width: 10,
//                         height: 10,
//                     },
//                     shadowOpacity: 0.5,
//                     shadowRadius: 1,
//                     elevation: 10,
//                 }}>
//                     <View>
//                         <Image style={{
//                             width: '100%',
//                             height: 200,
//                             borderRadius: 1,
//                         }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
//                         <View style={{ padding: 10 }}>
//                             <Text style={{ fontSize: 15, color: 'gray', alignSelf: 'flex-end' }}>Posted 40 min ago</Text>
//                             <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
//                             <Text style={{ color: 'black' }}>We will remove extra Barracks and Dark Barracks buildings and
//                                 only keep one of each. The highest level building will be kept,
//                                 and in case all the highest level buildings are under construction
//                                 you will keep the one with the shortest upgrade time left.</Text>
//                         </View>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={visible}
//                 onRequestClose={() => {
//                     setVisible(!visible);
//                 }}
//             >
//                 <ModalLayout
//                     onClose={() => {
//                         setVisible(!visible);
//                     }}
//                 >
//                     <View >
//                         <View>
//                             <Image style={{
//                                 width: '100%',
//                                 height: 200,
//                                 borderRadius: 1,
//                             }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />

//                             <View style={{ padding: 10 }}>
//                                 <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
//                                 <Text style={{ color: 'black' }}>We will remove extra Barracks and Dark Barracks buildings and
//                                     only keep one of each. The highest level building will be kept,
//                                     and in case all the highest level buildings are under construction
//                                     you will keep the one with the shortest upgrade time left....</Text>

//                             </View>

//                             <View style={{ flexDirection: 'row', marginTop: 10, }}>
//                                 <LinearGradient
//                                     colors={['#21D4FD', '#2152FF']}
//                                     end={{ x: 0, y: 1 }}
//                                     start={{ x: 1, y: 0 }}
//                                     style={{ borderRadius: 30 }}
//                                 >
//                                     <TouchableOpacity
//                                         style={{
//                                             alignItems: "center",
//                                             padding: 10,
//                                             flexDirection: 'row'
//                                         }}
//                                         onPress={() => { navigation.push("proposalDetails"); }}
//                                     >
//                                         <MaterialIcons name="account-tree" size={24} color="black" />
//                                         <Text style={{ color: 'black' }}>Details</Text>
//                                     </TouchableOpacity>
//                                 </LinearGradient>
//                                 <LinearGradient
//                                     colors={['#FF0080', '#7928CA']}
//                                     end={{ x: 0, y: 1 }}
//                                     start={{ x: 1, y: 0 }}
//                                     style={{ borderRadius: 30, marginLeft: '10%' }}
//                                 >
//                                     <TouchableOpacity
//                                         style={{
//                                             alignItems: "center",
//                                             padding: 10,
//                                             flexDirection: "row",
//                                         }}
//                                         onPress={() => {
//                                             alert('working');
//                                         }}
//                                     >
//                                         <MaterialIcons name="edit" size={24} color="black" />
//                                         <Text style={{ color: 'black' }}>Edit</Text>
//                                     </TouchableOpacity>
//                                 </LinearGradient>
//                                 <LinearGradient
//                                     colors={['#FBCF33', '#F53939']}
//                                     end={{ x: 0, y: 1 }}
//                                     start={{ x: 1, y: 0 }}
//                                     style={{ borderRadius: 30, marginLeft: '17%' }}
//                                 >
//                                     <TouchableOpacity
//                                         style={{
//                                             alignItems: "center",
//                                             padding: 10,
//                                             flexDirection: "row",
//                                         }}
//                                         onPress={() => {
//                                             alert('ok');
//                                         }}
//                                     >
//                                         <MaterialIcons name="delete" size={24} color="black" />
//                                         <Text style={{ color: 'black' }}>Delete</Text>
//                                     </TouchableOpacity>
//                                 </LinearGradient>
//                             </View>
//                         </View>
//                     </View>
//                 </ModalLayout>
//             </Modal>
//         </View>
//     );
// };
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// const Screen = ({ navigation }) => {
//     const [search, setSearch] = useState('');
//     console.log(search);
//     return (
//         <ImageBackground
//             source={images.background} resizeMode="cover"
//             style={{
//                 flex: 1,
//                 paddingVertical: SIZES.padding,
//             }}>
//             <ScrollView>
//                 <View style={{ margin: 10 }}>
// <SearchBar onPress={() => { alert(search) }} backgroudColor={COLORS.lightGray} placeholderColor={COLORS.dark} setSearch={setSearch} />
//                 </View>
//                 <View style={{ marginTop: 30 }}>
//                     <CustomCard navigation={navigation} />
//                     <CustomCard navigation={navigation} />
//                     <CustomCard navigation={navigation} />
//                     <CustomCard navigation={navigation} />
//                     <CustomCard navigation={navigation} />
//                     <CustomCard navigation={navigation} />
//                 </View>
//             </ScrollView>
//             {/* <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="settings" size={24} color="white" />} placement={"right"} /> */}
//         </ImageBackground >
//     );
// };

// export default Screen;
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View, Modal, FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../../constants';
import { Avatar, Title } from 'react-native-paper';
import ModalLayout from './ModalLayout';
import { FAB, Card } from 'react-native-elements';
import { SearchBar } from '../../../components/SearchBar';

// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types

const CustomCard = ({ navigation }) => {

    const [visible, setVisible] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setVisible(true);
            }}>
                <View style={{
                    backgroundColor: '#F7F7FE', borderRadius: 10, marginBottom: 15,
                    padding: 5, shadowColor: 'black',
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    elevation: 10,
                }}>
                    <View>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 1,
                        }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Here is product name</Text>
                        </View>
                    </View>
                </View>




                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <ModalLayout
                        onClose={() => {
                            setVisible(!visible);
                        }}
                    >
                        <View >
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{
                                        width: 150,
                                        height: 50,
                                        borderRadius: 1,
                                        resizeMode: 'stretch',
                                    }} source={require('../../../assets/images/splash.png')} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '50%' }}>
                                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => { navigation.push('Gallery') }}>
                                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                                        <Card.Image
                                                            style={{ width: 80, height: 70 }}
                                                            resizeMode="cover"
                                                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/gears-1236578_960_720.jpg' }}
                                                        />
                                                    </View>
                                                    <Card.Title>Aufbau</Card.Title>
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => { navigation.push('Gallery') }}>
                                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                                        <Card.Image
                                                            style={{ width: 80, height: 70 }}
                                                            resizeMode="cover"
                                                            source={{ uri: 'https://media.istockphoto.com/id/1257394919/photo/pair-of-handbrake-cables-from-a-car-or-motorcycle-on-a-white-isolated-background-during.jpg?s=612x612&w=is&k=20&c=elwZ1Qm5lkHA69tLoMWGpnTS2ksoGH3borXt1a4nOkw=' }}
                                                        />
                                                    </View>
                                                    <Card.Title>Verdrahtung</Card.Title>
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '50%' }}>
                                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => { navigation.push('Gallery') }}>
                                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                                        <Card.Image
                                                            style={{ width: 80, height: 70 }}
                                                            resizeMode="cover"
                                                            source={{ uri: 'https://media.istockphoto.com/id/609908294/photo/khao-yai-art-museum.jpg?s=1024x1024&w=is&k=20&c=a4kE29cFJ0nQGdjqCnZFA7FANUl5YA-aSGpUv6-KiyM=' }}
                                                        />
                                                    </View>
                                                    <Card.Title>Kabelsatz
                                                    </Card.Title>
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => { navigation.push('Gallery'); }}>
                                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                                        <Card.Image
                                                            style={{ width: 80, height: 70 }}
                                                            resizeMode="cover"
                                                            source={{ uri: 'https://media.istockphoto.com/id/1186357899/vector/fast-services-check-list-and-stopwatch-quick-questionnaire-short-survey.jpg?s=1024x1024&w=is&k=20&c=-NxciFA89QyZQiKrEdlbwEeqrHujgTeblxPTRsmN7mw=' }}
                                                        />
                                                    </View>
                                                    <Card.Title style={{fontSize:14}}>Verdrahtungsliste
                                                    </Card.Title>
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ModalLayout>
                </Modal>
            </TouchableOpacity>
        </View>
    );
};
const Profile = ({ navigation, route }) => {
    let name = route.params;
    const [search, setSearch] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);
    return (
        <ImageBackground
            source={images.background}
            resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                // justifyContent: 'center',
            }}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ margin: 15, marginTop: 10 }}>
                            <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                <Text style={{ fontSize: 30, color: 'black' }}>{name}</Text>
                            </View>
                            <View style={styles.userInfoSection}>
                                <SearchBar onPress={() => { setSearchVisible(true) }} backgroudColor={COLORS.lightGray} placeholderColor={COLORS.dark} setSearch={setSearch} />
                            </View>
                            {searchVisible ? <View style={styles.OrganizedEvent}>
                                <View style={{ marginTop: 10 }}>
                                    <CustomCard navigation={navigation} />
                                </View>
                            </View> : <Text></Text>}

                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Profile;
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 45,
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        justifyContent: 'center', alignItems: 'center',
    },
    textAbove: { fontSize: 14, marginLeft: 12 },
    modalContainer: {
        margin: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,

    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    EventDetails: {

    },
    card: {
        backgroundColor: '#E9E8F3',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
    },
    OrganizedEvent: {
        margin: 10,
    },
    shadow: {
        shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    // =============================================================
    userInfoSection: {
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});
