import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 bg-white">
            {/* D A S H B O A R D */}

            <View className="w-full h-20 bg-blue-600 p-5">
                <Text className="text-white text-2xl">Dashboard</Text>
            </View>

            {/* E S T A T Í S T I C A S */}

            <View className="flex flex-row justify-around bg-white p-5 shadow-md">
                <View className="bg-white rounded-xl shadow-md p-4 w-1/3 justify-between">
                    <View>
                        <Text className="text-5x1 font-bold text-gray-700">Visitas</Text>
                        <Text className="text-lg font-bold text-blue-700">1,500</Text>
                    </View>

                    <Text className="text-xs text-gray-400">Últimos 7 dias</Text>
                </View>
                
                <View className="bg-white rounded-xl shadow-md p-4 w-1/3 justify-between">
                    <View>
                        <Text className="text-sm font-bold text-gray-700">Vendas</Text>
                        <Text className="text-lg font-bold text-green-500">320</Text>
                    </View>

                    <Text className="text-xs text-gray-400">Últimos 7 dias</Text>
                </View>
        
                <View className="bg-white rounded-xl shadow-md p-4 w-1/3 justify-between">
                    <View>
                        <Text className="text-sm font-bold text-gray-700">Novos Usuários</Text>
                        <Text className="text-lg font-bold text-yellow-500">120</Text>
                    </View>

                    <Text className="text-xs text-gray-400">Últimos 7 dias</Text>
                </View>
            </View>
            
            {/* P R O D U T O S */}

            <ScrollView className="flex-1" style={{paddingTop: 5, paddingLeft: 20, paddingRight: 20, paddingBottom: 40}}>
                <View className="bg-white flex-1 gap-5 justify-between">
                    <View className="w-full shadow-md rounded-xl p-10 justify-between overflow-hidden">
                        <View className="flex w-full h-50 items-center">
                            <Image className="w-48 h-48" source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/035/575/249/small/blue-t-shirt-isolated-free-png.png"}}></Image>
                        </View>

                        <Text className="text-3xl">Item 1</Text>
                        <Text className="text-base opacity-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, id vel.</Text>
                    </View>

                    <View className="w-full shadow-md rounded-xl p-10 justify-between overflow-hidden">
                        <View className="flex w-full h-50 items-center">
                            <Image className="w-48 h-48" source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/035/575/249/small/blue-t-shirt-isolated-free-png.png"}}></Image>
                        </View>

                        <Text className="text-3xl">Item 2</Text>
                        <Text className="text-base opacity-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, id vel.</Text>
                    </View>
                        
                    <View className="w-full shadow-md rounded-xl p-10 justify-between overflow-hidden">
                        <View className="flex w-full h-50 items-center">
                            <Image className="w-48 h-48" source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/035/575/249/small/blue-t-shirt-isolated-free-png.png"}}></Image>
                        </View>

                        <Text className="text-3xl">Item 3</Text>
                        <Text className="text-base opacity-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, id vel.</Text>
                    </View>
                </View>
            </ScrollView>

            {/* F I M */}
        </View>
    );
}