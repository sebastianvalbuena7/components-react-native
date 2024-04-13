import { View, Text, StyleSheet, Pressable, Animated, Easing } from "react-native"
import { useAnimation } from "../../hooks/useAnimation";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CustomView } from "../../components/ui/CustomView";
import { Button } from "../../components/ui/Button";

export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    const { colors } = useContext(ThemeContext);

    return (
        <CustomView style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [
                        {
                            translateY: animatedTop
                        }
                    ],
                    backgroundColor: colors.primary
                }
            ]} />

            {/* Fade In */}
            <Button
                onPress={() => {
                    fadeIn({})
                    startMovingTopPosition({ initialPosition: -100, easing: Easing.bounce, duration: 790 })
                }}
                styles={{
                    marginTop: 10
                }}
                text="FadeIn"
            />

            {/* Fade Out */}
            <Button
                onPress={() => fadeOut({})}
                styles={{
                    marginTop: 10
                }}
                text="FadeOut"
            />

        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150
    }
});