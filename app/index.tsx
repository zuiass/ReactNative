import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DetalhesProduto() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Cabeçalho */}
      <View className="bg-blue-600 p-4">
        <Text className="text-white text-2xl font-bold">Detalhes do Produto</Text>
      </View>

      {/* ScrollView para conteúdo rolável */}
      <ScrollView className="px-4 py-6">
        <View className="items-center">
          <Image
            source={{ uri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' }}
            className="w-40 h-52 rounded-lg mb-4"
          />
        </View>
        {/* Imagem do Produto */}

        {/* Nome do Produto */}
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Produto Excepcional
        </Text>

        {/* Descrição do Produto */}
        <Text className="text-base text-gray-600 mb-4">
          Este produto foi criado com materiais de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade e estilo.
        </Text>

        {/* Preço */}
        <Text className="text-2xl font-semibold text-green-500 mb-6">
          R$ 299,99
        </Text>

        {/* Botão de Comprar */}
        <TouchableOpacity className="bg-blue-500 py-3 rounded-full">
          <Text className="text-center text-white text-lg font-bold">Comprar Agora</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
