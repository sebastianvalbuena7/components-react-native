import { useState } from "react"
import { Modal, Platform, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"

export const ModalScreen = () => {
    const [openModal, setOpenModal] = useState(false);

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
                    backgroundColor: 'rgba(0,0,0,0.1)'
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
