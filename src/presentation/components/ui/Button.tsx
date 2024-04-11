import { Text, ViewStyle, StyleProp, Pressable } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme";

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>
    onPress: () => void;
}

export const Button = ({ text, onPress, styles }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={
                ({ pressed }) => ([
                    globalStyles.btnPrimary,
                    {
                        opacity: pressed ? 0.8 : 1,
                        backgroundColor: colors.primary
                    },
                    styles
                ])
            }
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor
                }
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}