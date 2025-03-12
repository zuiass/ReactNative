import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (

    <View className="flex-1 justify-center items-center gap-5">
      <Image className="rounded-full w-72 h-72" source={{uri: 'https://github.com/rafavini.png'}} />

      <Text className="text-5xl text-dark-200 font-bold">Rafael Vinicius</Text>

      <View className="flex items-center">
        <Text className="text-2xl opacity-50 text-dark-200">idade: 18 anos</Text>
        <Text className="text-2xl opacity-50 text-dark-200">Endereço: Rua 26 de Agosto, 300</Text>
      </View>

      <TouchableOpacity className="bg-blue-500 text-white p-2 rounded-full mt-4">
        <Text className="text-white text-2xl p-2">Clique aqui</Text>
      </TouchableOpacity>
    </View>

  );
}