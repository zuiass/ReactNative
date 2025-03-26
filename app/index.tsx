import { 
    Text, View, TouchableOpacity, Image, 
    ScrollView, ActivityIndicator 
} from "react-native";
import { useEffect, useState } from "react";

export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProdutos = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                setProdutos(data);
                setLoading(false);

            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);
    
    if (loading) {
        return (
            <View className="flex-1 bg-white items-center justify-center">
                <ActivityIndicator size={75} color="#0000ff" />
            </View>
        );
    }
    
    return (
        <View className="flex-1 p-5 bg-white">
            {/* Header */}
            <View className="flex p-4 gap-2 w-full items-center flex-row justify-center">
                <Image 
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/05/Microsoft_Store_Fluent_Design_icon_%282%29.png'}} 
                    style={{width: 30, height: 30}} 
                />
                <Text className="text-2xl font-bold">Loja Virtual</Text>
            </View>

            {/* Lista de Produtos */}
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View className="flex flex-wrap flex-row justify-center gap-4">
                    {produtos.map((produto) => (
                        <View key={produto.id} className="bg-gray-100 p-4 rounded-lg w-44 items-center shadow-md">
                            <Image 
                                source={{ uri: produto.image }} 
                                style={{ width: 80, height: 80, resizeMode: "contain" }} 
                            />
                            <Text className="text-lg font-semibold text-center mt-2" numberOfLines={1}>
                                {produto.title}
                            </Text>
                            <Text className="text-sm text-gray-500">{produto.category}</Text>
                            <Text className="text-lg font-bold text-green-600 mt-1">
                                R$ {produto.price.toFixed(2)}
                            </Text>
                            <TouchableOpacity className="bg-blue-500 mt-2 px-3 py-1 rounded">
                                <Text className="text-white font-bold">Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}