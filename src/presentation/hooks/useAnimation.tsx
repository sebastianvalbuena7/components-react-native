import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
        // Animated.timing(animatedTop, {
        //     toValue: 0,
        //     useNativeDriver: true,
        //     duration: 700,
        //     easing: Easing.bounce
        // }).start();

        Animated.timing(animatedOpacity, {
            duration,
            toValue,
            useNativeDriver: true
        }).start(callback);
    }

    const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue,
            useNativeDriver: true,
            duration
        }).start(callback);

        // () => animatedTop.resetAnimation()

        // Animated.timing(animatedTop, {
        //     toValue: -100,
        //     useNativeDriver: true,
        //     duration: 700,
        //     easing: Easing.elastic(2)
        // }).start();
    }

    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => { }
    }) => {
        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue,
            useNativeDriver: true,
            duration,
            easing
        }).start(callback);
    }

    return {
        animatedOpacity,
        animatedTop,
        startMovingTopPosition,
        fadeIn,
        fadeOut
    }
}
