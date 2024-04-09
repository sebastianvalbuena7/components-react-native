import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    promptType?: 'plain-text' | 'secure-text';
    placeholder?: string;
    defaultValue?: string; 
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: "cancel" | "default" | "destructive"
}

export const showPrompt = ({ title, buttons, subTitle, promptType = 'plain-text', placeholder, defaultValue }: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue,
            placeholder
        }
    );
}