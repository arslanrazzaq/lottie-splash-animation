// import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const SplashScreenLottie = ({ setIsAnimationFinished }) => {
    return (
        <View
            style={styles.container}
        >
            <AnimatedLottieView
                exiting={ZoomOut}
                onAnimationFinish={(isCancelled) => {
                    if (!isCancelled) {
                        setIsAnimationFinished(true)
                    }
                }}
                source={require('@assets/lottie/netflix.json')}
                autoPlay
                loop={false}
                style={{
                    width: '80%',
                    maxWidth: 400,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }  
})

export default SplashScreenLottie;