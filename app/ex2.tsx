import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Produto() {
    return (
        <ScrollView>
            <View className="flex-1 bg-white p-4">
                {/* Imagem do produto */}
                <Image
                    source={{ uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' }}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                />

                {/* Nome do produto */}
                <Text className="text-3xl font-bold text-gray-900 mb-2">
                    Produto Incrível
                </Text>

                {/* Descrição do produto */}
                <Text className="text-base text-gray-600 mb-4">
                    Este é um produto de alta qualidade, feito para durar e proporcionar a melhor experiência.
                </Text>

                {/* Preço */}
                <Text className="text-2xl font-semibold text-green-500 mb-6">
                    R$ 199,99
                </Text>

                {/* Botão de adicionar ao carrinho */}
                <TouchableOpacity className="bg-blue-500 text-white py-3 rounded-full">
                    <Text className="text-center text-lg font-bold">Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
