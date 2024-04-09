import { Alert, View } from "react-native"
import { globalStyles } from "../../../config/theme/theme"
import { Button } from "../../components/ui/Button"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { showPrompt } from "../../../config/adapters/prompt.adapter"

export const AlertScreen = () => {

    const createTwoButtonAlert = () => (
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
    )

    const createThreeButtonAlert = () => (
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            cancelable: true
        })
    )

    const onShowPrompt = () => {
        showPrompt({
            title: 'Mollit sint incididunt qui cillum voluptate voluptate tempor anim consequat qui.',
            subTitle: 'Commodo ea in excepteur ipsum laborum labore est duis velit.',
            buttons: [
                {
                    text: 'OK',
                    onPress: () => console.log('Ok'),
                }
            ],
            placeholder: 'placeholder'
        })
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title text="Alerts" />

            <Button
                text="Alert - 2 buttons"
                onPress={createTwoButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Alert - 3 buttons"
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Prompt"
                onPress={onShowPrompt}
            />
        </CustomView>
    )
}
