import { View, Text, StyleSheet, Pressable, Animated, Easing } from "react-native"
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [
                        {
                            translateY: animatedTop
                        }
                    ]
                }
            ]} />

            {/* Fade In */}
            <Pressable
                onPress={() => {
                    fadeIn({})
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.bounce, duration: 790 })
                }}
                style={{
                    marginTop: 10
                }}
            >
                <Text>FadeIn</Text>
            </Pressable>

            {/* Fade Out */}
            <Pressable
                onPress={() => fadeOut({})}
                style={{
                    marginTop: 10
                }}
            >
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
});