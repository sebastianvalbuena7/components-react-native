import { useState } from "react";
import { View, StyleProp, ImageStyle, Animated, ActivityIndicator } from "react-native"
import { useAnimation } from "../../hooks/useAnimation";

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading && (
                    <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={'grey'} size={30}
                />
                )
            }

            <Animated.Image
                onLoadEnd={() => {
                    fadeIn({duration: 1000});
                    setIsLoading(false);
                }}
                source={{ uri }}
                style={[style, {
                    opacity: animatedOpacity
                }]}
            />
        </View>
    )
}
