import { router } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

let slides = [
    { cor: 'red', resposta: '1º andar' },
    { cor: 'blue', resposta: 'Corredor 2º andar' },
    { cor: 'green', resposta: 'Biblioteca' }
];

// H T M L

export default function Index() {

    const [indiceAtual, setIndiceAtual] = useState(0);
    const [feedback, setFeedback] = useState("FFFFF");

    // R E T U R N

    return (
        <View className="flex-1 max-h-[100%] bg-gray-900 box-border items-center">

            <View className="flex absolute z-10 mt-7 w-52 items-center bg-green-700 p-4 rounded-2xl">
                <Text className="text-white text-lg font-bold">{feedback}</Text>
            </View>

            <View className="flex-1 w-full p-5 box-border justify-between gap-10">
                <View className="flex-1 bg-slate-800 rounded-2xl">
                    {/* Entrada de imagens */}
                </View>

                <View className="flex flex-col w-full h-[110px] box-border justify-between">
                    <View className="flex flex-row justify-between">
                        <TouchableOpacity className="w-10 h-10 flex p-3 rounded-md items-center justify-center bg-red-600">
                            <Text className="text-xl font-semibold">-1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 flex p-3 rounded-md items-center justify-center bg-yellow-500">
                            <Text className="text-xl font-semibold">0º</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 flex p-3 rounded-md items-center justify-center bg-green-600">
                            <Text className="text-xl font-semibold">1º</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 flex p-3 rounded-md items-center justify-center bg-green-500 rounded-full">
                            <Text className="text-xl font-semibold">2º</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 flex p-3 rounded-md items-center justify-center bg-blue-500 rounded-full">
                            <Text className="text-xl font-semibold">3º</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="flex items-center justify-center">
                        <TextInput
                            className="w-full h-[50px] text-white bg-slate-800 rounded-full p-3 text-xl" style={{paddingRight: 50, paddingLeft: 20}}
                            placeholder="Esse lugar parece ser..."
                            placeholderTextColor={"#707070"}
                        />

                        <TouchableOpacity className="absolute right-0 bg-violet-700 rounded-full p-2" style={{marginRight: 6}}>
                            <Image source={require('./send.svg')} resizeMode="cover"/>
                        </TouchableOpacity>
                    </View>
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