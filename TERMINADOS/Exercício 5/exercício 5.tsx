import {Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator} from "react-native";
import { useEffect, useState } from "react";

export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [semAlcance, setSemAlcance] = useState(false);

    const fetchProdutos = async () => {
        setLoading(true);
        setSemAlcance(false);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            
            setProdutos(data);
            setSemAlcance(false);

            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            setSemAlcance(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchProdutos();

            if (loading) {
                setSemAlcance(true);
                setLoading(false);
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    const recarregarProdutos = () => {
        fetchProdutos();
    };

    // H T M L \\

    if (loading) {
        return (
            <View className="flex-1 bg-white">

                <View className="flex p-5 gap-2 w-full items-center flex-row justify-center">
                    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/05/Microsoft_Store_Fluent_Design_icon_%282%29.png'}} style={{width: 30, height: 30}} />
                    <Text className="text-2xl font-bold">Kaikos Store</Text>
                </View>

                <ActivityIndicator className="flex-1" size={75} color="#0000ff" />

            </View>
        );
    }
    
    if (semAlcance) {
        return (
            <View className="flex-1 bg-white">

                <View className="flex z-10 p-5 gap-2 w-full items-center flex-row justify-center">
                    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/05/Microsoft_Store_Fluent_Design_icon_%282%29.png'}} style={{width: 30, height: 30}} />
                    <Text className="text-2xl font-bold">Kaikos Store</Text>
                </View>

                <View className="flex-1 justify-center font-semibold items-center gap-3 p-5">
                    <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5089/5089713.png'}} className="w-[200px] h-[200px] opacity-50" />

                    <Text className="text-xl text-center text-gray-500">
                        Não foi possível encontrar nenhum produto...
                    </Text>

                    <TouchableOpacity onPress={recarregarProdutos} className="p-3 w-[250px] bg-blue-600 rounded-full flex items-center">
                        <Text className="text-white text-xl">Tentar novamente</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    return (
        <View className="flex-1 bg-white">

            <View className="flex z-10 shadow-lg p-5 gap-2 w-full items-center flex-row justify-center">
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/05/Microsoft_Store_Fluent_Design_icon_%282%29.png'}} style={{width: 30, height: 30}} />
                <Text className="text-2xl font-bold">Kaikos Store</Text>
            </View>
 
            <ScrollView style={{paddingBottom: 50}}>
                <View className="flex p-5 flex-wrap flex-row justify-center gap-5 bg-white">
                    {
                    produtos.map((produto) => (
                        <View key={produto.id} className="bg-white p-5 gap-4 justify-between rounded-xl w-full h-80 shadow-md">
                            <View className="flex w-full items-center">
                                <Image source={{uri: produto.image}} style={{width: 150, height: 150, resizeMode: "contain"}} />
                            </View>

                            <View className="flex flex-col gap-2 items-start justify-start">
                                <Text className="text-xl font-semibold" numberOfLines={2}>
                                    {produto.title}
                                </Text>

                                <Text className="text-base text-gray-500">
                                    {produto.category}
                                </Text>

                                <Text className="text-lg font-bold text-green-600">
                                    R$ {produto.price.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
}