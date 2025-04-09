import { router } from "expo-router";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function Index() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    function entrarCadastro() {
        router.push("./cadastro");
    }

    function entrarHome() {
        if (!nome || !senha) {
            return;
        }

        router.push({
            pathname: "./home", params: { nome: nome }
        });
    }

    return (
        <View className="flex-1 gap-4 bg-white">
        <View className="flex w-full h-52 justify-center items-center gap-1">
            <Text className="text-3xl font-bold">Bem vindo</Text>
            <Text className="text-gray-400">entre com a sua conta</Text>
        </View>

        <View className="flex p-5 gap-3" style={{ paddingTop: 0 }}>
            <TextInput
                value={nome}
                onChangeText={setNome}
                className="p-3 rounded-full shadow-md"
                placeholder="Nome"
                placeholderTextColor="#9CA3AF"
            />
            <TextInput
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                className="p-3 rounded-full shadow-md"
                placeholder="Senha"
                placeholderTextColor="#9CA3AF"
            />

            <View className="w-full flex items-end">
                <TouchableOpacity>
                    <Text className="text-gray-400">Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className="flex p-5 gap-4">
            <TouchableOpacity onPress={entrarHome} className="bg-indigo-600 rounded-full p-3 flex items-center">
                <Text className="text-white">Entrar</Text>
            </TouchableOpacity>

            <View className="flex flex-row gap-2 justify-center">
                <Text className="text-gray-400">Não tem uma conta?</Text>
                <TouchableOpacity onPress={entrarCadastro}>
                    <Text className="font-bold">Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}