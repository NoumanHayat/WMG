/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import { images, SIZES } from '../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card } from 'react-native-elements';
// import { COLORS, images, SIZES } from '../../../constants';

// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScrollView>
                <View
                    style={{
                        alignItems: 'center',
                        flex:0.2
                    }}>
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{
                            height: 250,
                            width: 300,
                        }}
                    />
                </View>
                {/* <Text style={{ fontSize: 23, color: 'black', fontWeight: "bold" }}>Customer</Text> */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search')}}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('Search') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                                            />
                                    </View>
                                    <Card.Title>Customer</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="settings" size={24} color="white" />} placement={"right"} /> */}
        </ImageBackground >
    );
};

export default Screen;