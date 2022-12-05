import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, values , images } from '../../constants';
import { StatusBar, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import AppText from '../../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AfterLoadSplashScreen.styles';

const slides: { key: string; title: string; text: string; image: Source; backgroundColor: string }[] = [
  {
    key: 'one',
    title: 'Fotos von Geräten',
    text: 'Fotos werden nur als Hilfsdienst verwendet. Wenn Sie sich nicht sicher sind, fragen Sie immer Ihren Teamleiter um Hilfe.',
    image: images.introPic0,
    backgroundColor: '#59b2ab',
  }
];

type AfterLoadSplashScreenProps = { onGetStarted: () => void };
const AfterLoadSplashScreen = ({ onGetStarted }: AfterLoadSplashScreenProps): JSX.Element => {
  const renderStep = ({ item }: { item: typeof slides[number] }): JSX.Element => (
    <LinearGradient
      style={styles.containerGradient}
      useAngle={true}
      angle={90}
      colors={[COLORS.lightPrimary, COLORS.primary, COLORS.primary, COLORS.lightPrimary]}
    >
      <View style={styles.mainView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={styles.itemsCentered}>
          <FastImage source={item.image} style={styles.imageSize} />
          <View style={styles.sliderContainer}>
            {slides.map((s) => (
              <View
                key={`slide_mark_${s.key}`}
                style={{
                  flex: s.key === item.key ? 2 : 1,
                  backgroundColor: s.key === item.key ? COLORS.white : COLORS.gray,
                  marginHorizontal: 2,
                  height: 7,
                  borderRadius: 5
                }}
              />
            ))}
          </View>
          <AppText style={styles.title} fontWeight="SemiBold">
            {item.title}
          </AppText>
          <AppText style={styles.text}>{item.text}</AppText>
        </View>
      </View>
    </LinearGradient>
  );

  return <AppIntroSlider renderItem={renderStep} data={slides} onDone={onGetStarted} showPrevButton showSkipButton />;
};

export default AfterLoadSplashScreen;
