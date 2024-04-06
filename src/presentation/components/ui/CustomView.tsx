import { View, Text, StyleProp, ViewStyle } from "react-native"
import { globalStyles } from "../../../config/theme/theme"

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const CustomView = () => {
    return (
        <View style={[globalStyles.mainContainer]}>
            <Text>CustomView</Text>
        </View>
    )
}
