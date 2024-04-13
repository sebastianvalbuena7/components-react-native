import { useContext, useState } from "react"
import { Modal, Platform, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { ThemeContext } from "../../context/ThemeContext"

export const ModalScreen = () => {
    const [openModal, setOpenModal] = useState(false);

    const { colors } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text="Modal" safe />

            <Button
                text="Abrir modal"
                onPress={() => setOpenModal(true)}
            />

            <Modal
                visible={openModal}
                animationType="slide"
            >
                <View style={{
                    flex: 1,
                    backgroundColor: colors.background
                }}>
                    <View style={{
                        paddingHorizontal: 10
                    }}>
                        <Title text="Modal Content" safe />
                    </View>

                    <View style={{ flex: 1 }} />

                    <Button
                        text="Cerrar modal" 
                        onPress={() => setOpenModal(false)}
                        styles={{
                            height: Platform.OS === 'android' ? 40 : 60,
                            borderRadius: 0
                        }}    
                    />
                </View>
            </Modal>
        </CustomView>
    )
}
