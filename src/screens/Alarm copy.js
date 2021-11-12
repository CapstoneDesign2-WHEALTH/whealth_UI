import React, {useEffect, useState, useRef} from 'react';
import {Svg, Line, Path} from 'react-native-svg';
import {Animated, View} from 'react-native';
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedLine = Animated.createAnimatedComponent(Line);

export default () => {
  const initWidth = useRef(new Animated.Value(0)).current;
  const initHeight = useRef(new Animated.Value(0)).current;

  let animateWidth = initWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0', '100'],
  });
  let animateHeight = initHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0', '100'],
  });

  useEffect(() => {
    Animated.timing(
      // Animate over time
      initWidth,
      {
        toValue: 100,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
    Animated.timing(
      // Animate over time
      initHeight,
      {
        toValue: 100,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
  }, []);

  return (
    <View>
      <AnimatedSvg height="100" width="100">
        <AnimatedLine
          x1={0}
          y1={0}
          x2={animateWidth}
          y2={animateHeight}
          stroke="red"
          strokeWidth="2"
        />
      </AnimatedSvg>

      <Path
        d="M50,250 C100,300 150,200 200,250 S250,200 300,250"
        stroke="green"
        stroke-width="5"
        fill="none"
      />
    </View>
  );
};
