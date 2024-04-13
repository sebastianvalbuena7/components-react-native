import { useContext, useState } from "react"
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native"
import { Card } from "../../components/ui/Card"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { globalStyles } from "../../../config/theme/theme"
import { ThemeContext } from "../../context/ThemeContext"

export const TextInputScreen = () => {
    const { colors } = useContext(ThemeContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView>
                <CustomView margin>
                    <Title text="Text Inputs" safe />

                    <Card>
                        <TextInput
                            style={[globalStyles.input, {
                                borderColor: colors.text,
                                color: colors.text,
                            }]}
                            placeholderTextColor={colors.text}
                            placeholder="Nombre Completo"
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />

                        <TextInput
                            style={[globalStyles.input, {
                                borderColor: colors.text,
                                color: colors.text,
                            }]}
                            placeholderTextColor={colors.text}
                            placeholder="Correo"
                            keyboardType="email-address"
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, email: value })}
                        />

                        <TextInput
                            style={[globalStyles.input, {
                                borderColor: colors.text,
                                color: colors.text,
                            }]}
                            placeholderTextColor={colors.text}
                            placeholder="Telefono"
                            keyboardType="phone-pad"
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <TextInput
                            style={[globalStyles.input, {
                                borderColor: colors.text,
                                color: colors.text,
                            }]}
                            placeholderTextColor={colors.text}
                            placeholder="Telefono"
                            keyboardType="phone-pad"
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>
                </CustomView>

                <View style={{ height: 50 }} />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
