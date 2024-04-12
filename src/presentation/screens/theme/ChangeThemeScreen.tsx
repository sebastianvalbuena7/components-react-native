import { View } from "react-native"
import { Button } from "../../components/ui/Button"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"

export const ChangeThemeScreen = () => {
    return (
        <CustomView margin>
            <Title text="Cambiar tema" safe />

            <Button
                text="Light"
                onPress={() => { }}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Dark"
                onPress={() => { }}
            />
        </CustomView>
    )
}
