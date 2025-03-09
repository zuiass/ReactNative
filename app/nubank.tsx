import { Ionicons } from "@expo/vector-icons"; // Certifique-se de instalar @expo/vector-icons
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 bg-purple-900">
            {/* Header */}
            <View className="pt-12 pb-6 px-6">
                <View className="flex-row items-center justify-between mb-5">
                    <View className="w-14 h-14 bg-white/20 rounded-full justify-center items-center">
                        <Text className="text-white text-xl font-bold"><Ionicons name="person-outline" size={24} color="white" /></Text>
                    </View>
                    <View className="flex-row gap-5">
                        <TouchableOpacity>
                            <Ionicons name="eye-outline" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="person-outline" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="person-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className="text-white text-xl font-semibold">Olá, Rafael</Text>
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView className="flex-1 bg-white ">
                {/* Saldo Section */}
                <View className="p-6">
                    <View className="mb-6">
                        <Text className="text-black text-2xl font-bold mb-1">Conta</Text>
                        <Text className="text-black text-xl font-semibold">R$ 1.234,56</Text>
                    </View>

                    <View className="flex-row justify-between mb-6">
                        <TouchableOpacity className="items-center w-20">
                            <View className="w-20 h-20 bg-gray-300/20 rounded-full justify-center items-center mb-5">
                                <Text className=""><Ionicons name="person-outline" size={24} color="black" /></Text>
                            </View>
                            <Text className="text-black text-xs text-center">pix</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center w-20">
                            <View className="w-20 h-20 bg-gray-300/20 rounded-full justify-center items-center mb-5">
                                <Text className=""><Ionicons name="person-outline" size={24} color="black" /></Text>
                            </View>
                            <Text className="text-black text-xs text-center">Pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center w-20">
                            <View className="w-20 h-20 bg-gray-300/20 rounded-full justify-center items-center mb-5">
                                <Text className=""><Ionicons name="person-outline" size={24} color="black" /></Text>
                            </View>
                            <Text className="text-black text-xs text-center">Pagar empréstimo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center w-20">
                            <View className="w-20 h-20 bg-gray-300/20 rounded-full justify-center items-center mb-5">
                                <Text className=""><Ionicons name="person-outline" size={24} color="black" /></Text>
                            </View>
                            <Text className="text-black text-xs text-center">transferir</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity className="w-full h-16 bg-gray-300/20 rounded-xl pl-5 items-center flex-row gap-5">
                            <Text className=""><Ionicons name="person-outline" size={24} color="black" /></Text>
                            <Text className="font-bold">Meus cartões</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}