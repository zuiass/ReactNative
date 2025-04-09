import { Link, router } from "expo-router";
import {Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, TextInput} from "react-native";
import { useEffect, useState } from "react";

export default function Cadastro() {

    const [usuario, setUsuario] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    function entrarLogin() {
        router.push("./");
    }

    function entrarHome() {
        if (!usuario || !nome || !senha) {
            return;
        }

        router.push("./home");
    }

    return (
        <View className="flex-1 gap-4">
            <View className="flex w-full h-52 justify-center items-center gap-1">
                <Text className="text-3xl font-bold">Crie sua conta</Text>
                <Text className="text-gray-400">e aproveite</Text>
            </View>

            <View className="flex p-5 gap-3" style={{paddingTop: 0}}>
                <TextInput
                    value={usuario}
                    onChangeText={setUsuario}
                    className="p-3 rounded-full shadow-md"
                    placeholder="Usuário"
                    placeholderTextColor={"#9CA3AF"}
                />

                <TextInput
                    value={nome}
                    onChangeText={setNome}
                    className="p-3 rounded-full shadow-md"
                    placeholder="Nome"
                    placeholderTextColor={"#9CA3AF"}
                />

                <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    className="p-3 rounded-full shadow-md"
                    placeholder="Senha"
                    placeholderTextColor={"#9CA3AF"}
                />
                
                <View className="w-full flex items-end">
                    <TouchableOpacity>
                        <Text className="text-gray-400">Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex p-5 gap-4">
                <TouchableOpacity onPress={entrarHome} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full p-3 flex items-center">
                    <Text className="text-white">Cadastrar</Text>
                </TouchableOpacity>

                <View className="flex flex-row gap-2 justify-center">
                    <Text className="text-gray-400">Já tem uma conta?</Text>

                    <TouchableOpacity onPress={entrarLogin}>
                        <Text className="font-bold">Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}