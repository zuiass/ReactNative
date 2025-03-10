import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (

    <View className="flex-1 justify-center items-center">
      <Image className="rounded-full w-80 h-80" source={{uri: 'https://github.com/rafavini.png'}} />

      <Text className="text-5xl text-dark-200 font-bold">Rafael Vinícius</Text>

      <Text className="text-2xl text-dark-200">idade: 18 anos</Text>
      <Text className="text-2xl text-dark-200">Endereço: Rua 26 de Agosto, 300</Text>

      <TouchableOpacity className="bg-blue-500 text-white p-2 rounded-md mt-4">
        <Text className="text-white text-2xl p-2">Clique aqui</Text>
      </TouchableOpacity>
    </View>

  );
}