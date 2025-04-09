import { Text, View, ScrollView, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export default function Home() {

    const [produtos, setProdutos] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { nome } = useLocalSearchParams();

    useEffect(() => {
        async function buscarProdutos() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProdutos(data);
            setLoading(false);
        }

        buscarProdutos();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#000000"/>
                <Text className="mt-4">Procurando produtos...</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-gray-100">
            <View className="w-full h-[75px] p-5 bg-gray-800 flex items-center flex-row justify-between">
                <Text className="text-4xl items-start color-white">Kaikostore</Text>

                <View className="flex items-end">
                    <Text className="text-2x1 color-white">Olá, {nome}</Text>
                </View>
            </View>

            <ScrollView className="p-4">
                {produtos.map(produto => (

                    <View key={produto.id} className="mb-4 bg-white rounded-lg shadow-sm flex-row p-3">
                        <Image
                            source={{ uri: produto.image }}
                            className="w-20 h-20"
                            resizeMode="contain"
                        />

                        <View className="flex-1 ml-4 justify-between">
                            <View>
                                <Text className="text-base font-medium" numberOfLines={2}>
                                    {produto.title}
                                </Text>

                                <Text className="text-green-600 font-bold mt-1">
                                    ${produto.price.toFixed(2)}
                                </Text>
                            </View>

                            <TouchableOpacity  className="bg-gray-800 rounded-md py-2 mt-2">
                                <Text className="text-white text-center">Detalhes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}