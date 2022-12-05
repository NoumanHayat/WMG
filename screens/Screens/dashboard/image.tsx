/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
} from 'react-native';
import {images, SIZES} from '../../../constants';

// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types


const Profile = (props) => {
    console.log(props.route.params)

  return (
    <ImageBackground
      source={props.route.params.source}
      resizeMode="cover"
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        // justifyContent: 'center',
      }}>
    </ImageBackground>
  );
};

export default Profile;
