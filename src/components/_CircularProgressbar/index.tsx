import { Dimensions, StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import React, { useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import { colors, theme } from "@theme";
import moment from "moment";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { width } = Dimensions.get("window");
const size = width - 96;
const strokeWidth = 14;
const radius = (size - strokeWidth) / 2;
const circumference = (radius - 15) * 2 * Math.PI;

interface OwnProps {
  progress: number;
}
export const _CircularProgressBar: React.FC<OwnProps> = () => {
  const [timer, setTimer] = React.useState(87);
  const progress = useSharedValue(0);
  const ref = useRef<NodeJS.Timeout>(null);
  // const a = interpolate(progress, [0, 1], [0, Math.PI * 2]);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference * progress.value,
  }));

  const animatedText = useDerivedValue(() => `${Math.floor(progress.value * 5)}`);
  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: animatedText.value,
    };
  });

  React.useEffect(() => {
    progress.value = withTiming(1, {
      duration: 87 * 1000,
      easing: Easing.linear,
    });
    const ref = setInterval(() => {
      setTimer((prev) => {
        console.log(prev);
        if (prev <= 0) {
          clearInterval(ref);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Svg width={size} height={size}>
        <Circle fill={colors.primary} cx={size / 2} cy={size / 2} r={radius} />
        <AnimatedCircle
          stroke={colors.white}
          strokeLinecap={"round"}
          fill={"none"}
          cx={size / 2}
          cy={size / 2}
          r={radius - 18}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          {...{ strokeWidth }}
          animatedProps={animatedProps}
        />
      </Svg>
      <Text style={styles.timerText}>{`${Math.floor(timer / 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(timer - Math.floor(timer / 60) * 60)
        .toString()
        .padStart(2, "0")}`}</Text>
    </React.Fragment>
  );
};

export default _CircularProgressBar;
const styles = StyleSheet.create({
  timerText: {
    position: "absolute",
    fontSize: theme.font.size.xl,
    fontFamily: theme.font.family.regular,
    color: colors.white,
  },
});
