/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import auth from '@react-native-firebase/auth';
import { COLORS, images, SIZES } from '../../../constants';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const SignIn = ({ navigation }) => {
  // let currentUser = auth().currentUser;
  const [data, setData] = React.useState({
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // replaces password text with * on active
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        justifyContent: 'center',
      }}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
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
            <View
              style={{
                flex: 3,
                paddingHorizontal: 20,
                paddingVertical: 30,
                marginBottom: -10,
              }}>
              <Text style={styles.textAbove}>Email or Phone Number</Text>
              <View style={styles.textBoxSign}>
                <Image
                  source={images.person}
                  resizeMode="contain"
                  style={{
                    width: 26,
                    height: 40,
                    right: 2,
                    alignSelf: 'flex-start',
                  }}
                />
                <TextInput
                  placeholder="Enter your email or phone number..."
                  placeholderTextColor="gray"
                  onChangeText={value => setEmail(value)}
                  autoCapitalize={'none'}
                  style={{
                    flex: 1,
                    height: 40.5,
                    fontSize: 15,
                    marginLeft: 2,
                    color: 'black',
                  }}
                />
              </View>

              <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30 }}>
                Password
              </Text>
              <View style={styles.textBoxSign}>
                <Image
                  source={images.lock}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 20,
                    top: 10,
                    alignSelf: 'flex-start',
                  }}
                />
                <TextInput
                  placeholder="Enter your password..."
                  placeholderTextColor="gray"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  onChangeText={value => setPassword(value)}
                  style={{
                    flex: 1,
                    height: 40.5,
                    fontSize: 15,
                    marginLeft: 5,
                    color: 'black',
                  }}
                />
                <TouchableOpacity
                  onPress={updateSecureTextEntry}
                  style={{ alignItems: 'flex-end' }}>
                  {data.secureTextEntry ? (
                    <Image
                      source={images.eyeclosed}
                      resizeMode="contain"
                      style={{ width: 25, height: 40 }}
                    />
                  ) : (
                    <Image
                      source={images.eye}
                      resizeMode="contain"
                      style={{ width: 25, height: 40 }}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    color: COLORS.darkgray,
                    marginBottom: -15,
                    top: 8,
                    alignSelf: 'flex-end',
                    right: 25,
                  }}>
                  Reset Password
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',
                  height: 55,
                  marginHorizontal: 30,
                  marginTop: 40,
                  marginBottom: -20,
                  paddingHorizontal: SIZES.radius,
                  borderRadius: 50,
                  backgroundColor: COLORS.primary,
                  ...styles.shadow,
                }}
                onPress={() => {
                  navigation.push('Dashboard');
                }}>
                <View>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'center',
                      top: 10,
                      color: COLORS.white,
                      fontSize: 30,
                    }}>
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignIn;

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
  },
  textAbove: { fontSize: 14, marginLeft: 12 },
});
