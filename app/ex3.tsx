import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
    return (
        <View className="flex-1 bg-gray-50">
            {/* Cabeçalho */}
            <View className="bg-blue-600 p-4 flex-row justify-between items-center">
                <Text className="text-white text-2xl font-bold">Dashboard</Text>
            </View>

            {/* Seção de Estatísticas */}
            <View className="p-4 flex-row justify-between">
                {/* Card de Estatísticas 1 */}
                <View className="bg-white p-4 w-1/3 rounded-lg shadow-md">
                    <Text className="text-xl font-semibold text-gray-800">Visitas</Text>
                    <Text className="text-3xl font-bold text-blue-600">1,500</Text>
                    <Text className="text-sm text-gray-500">Últimos 7 dias</Text>
                </View>

                {/* Card de Estatísticas 2 */}
                <View className="bg-white p-4 w-1/3 rounded-lg shadow-md">
                    <Text className="text-xl font-semibold text-gray-800">Vendas</Text>
                    <Text className="text-3xl font-bold text-green-600">320</Text>
                    <Text className="text-sm text-gray-500">Últimos 7 dias</Text>
                </View>

                {/* Card de Estatísticas 3 */}
                <View className="bg-white p-4 w-1/3 rounded-lg shadow-md">
                    <Text className="text-xl font-semibold text-gray-800">Novos Usuários</Text>
                    <Text className="text-3xl font-bold text-yellow-600">120</Text>
                    <Text className="text-sm text-gray-500">Últimos 7 dias</Text>
                </View>
            </View>

            {/* Lista de Itens */}
            <ScrollView className="px-4 py-2">
                {/* Card de Item 1 */}
                <View className="bg-white p-4 mb-4 rounded-lg shadow-md w-full">
                    <View className="items-center">
                        <Image
                            source={{ uri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' }}
                            className="w-40 h-52 rounded-lg mb-4"
                        />
                    </View>
                    <Text className="text-xl font-semibold text-gray-800 mb-2">Item 1</Text>
                    <Text className="text-base text-gray-600 mb-2">Descrição do item 1. Informações adicionais podem ser inseridas aqui.</Text>
                    <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                        <Text className="text-center text-white font-semibold">Ver Mais</Text>
                    </TouchableOpacity>
                </View>

                {/* Card de Item 2 */}
                <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
                    <View className="items-center">
                        <Image
                            source={{ uri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' }}
                            className="w-40 h-52 rounded-lg mb-4"
                        />
                    </View>
                    <Text className="text-xl font-semibold text-gray-800 mb-2">Item 2</Text>
                    <Text className="text-base text-gray-600 mb-2">Descrição do item 2. Informações adicionais podem ser inseridas aqui.</Text>
                    <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                        <Text className="text-center text-white font-semibold">Ver Mais</Text>
                    </TouchableOpacity>
                </View>

                {/* Card de Item 3 */}
                <View className="bg-white p-4 mb-4 rounded-lg shadow-md">
                    <View className="items-center">
                        <Image
                            source={{ uri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' }}
                            className="w-40 h-52 rounded-lg mb-4"
                        />
                    </View>
                    <Text className="text-xl font-semibold text-gray-800 mb-2">Item 3</Text>
                    <Text className="text-base text-gray-600 mb-2">Descrição do item 3. Informações adicionais podem ser inseridas aqui.</Text>
                    <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                        <Text className="text-center text-white font-semibold">Ver Mais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
