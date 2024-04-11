import { useState } from "react"
import { ScrollView, RefreshControl } from "react-native"
import { Title } from "../../components/ui/Title"
import { CustomView } from "../../components/ui/CustomView"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../../../config/theme/theme"

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    onRefresh={onRefresh}
                />
            }
        >
            <CustomView>
                <Title text="Pull to Refresh" safe />


            </CustomView>
        </ScrollView>
    )
}
