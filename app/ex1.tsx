import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/42884321?v=4' }}
                className="w-32 h-32 rounded-full mb-4"
            />
            <Text className="text-3xl font-bold text-black mb-2">Rafael Vinicius</Text>
            <Text className="text-lg text-gray-700 mb-2">Idade: 25 anos</Text>
            <Text className="text-lg text-gray-700 mb-4">Localização: Campo Grande MS</Text>
            <TouchableOpacity className="bg-blue-500 text-white py-2 px-4 rounded-full">
                <Text className="text-center text-white font-bold">Editar Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}
