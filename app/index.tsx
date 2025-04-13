import { router } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

const slides = [
    { cor: 'red', resposta: '1º andar' },
    { cor: 'blue', resposta: 'Corredor 2º andar' },
    { cor: 'green', resposta: 'Biblioteca' }
];

// H T M L

export default function App() {

    const [feedback, setFeedback] = useState("FFFFF");

    // R E T U R N

    return (
        <View className="flex-1 max-h-[100%] bg-gray-900 box-border items-center">

            <View className="flex absolute z-10 mt-7 w-52 items-center bg-red-700 p-4 rounded-2xl">
                <Text className="text-white text-lg font-bold">{feedback}</Text>
            </View>

            <View className="flex-1 p-5 box-border gap-5">
                <View className="flex-1 bg-slate-800 rounded-2xl">
                    {/* Entrada de imagens */}
                </View>

                <View className="w-full h-[50px] box-border justify-center">
                    <TextInput
                        className="flex-1 color-white bg-slate-800 rounded-full p-3 text-xl" style={{paddingRight: 50, paddingLeft: 20}}
                        placeholder="Esse lugar parece ser..."
                        placeholderTextColor={"#707070"}
                    />

                    <TouchableOpacity className="absolute right-0 bg-violet-700 rounded-full p-2" style={{marginRight: 6}}>
                        <Image source={require('./send.svg')} resizeMode="cover"/>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
    );
}

// S T Y L E S

const styles = StyleSheet.create({
    container: {

    }
});