import { useState } from "react"
import { ActivityIndicator, FlatList, Image, View } from "react-native"
import { colors } from "../../../config/theme/theme";
import { FadeInImage } from "./FadeInImage";

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 2000);
    }

    return (
        <View style={{ backgroundColor: '#000000' }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                onEndReached={loadMore}
                // onEndReachedThreshold={}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItem number={item} />}
                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator size={"large"} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (
        <FadeInImage
            uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
                height: 400,
                width: 500
            }}
        />
    )
}