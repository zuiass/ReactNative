import { Text, View, TouchableOpacity, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">

      <View className="w-full h-20 bg-blue-600 p-5">
        <Text className="text-white text-2xl">Detalhes do Produto</Text>
      </View>

      <View className="flex-1 p-10 gap-5">
        <View className="flex justify-center items-center">
          <Image className="w-48 h-48 object-cover" source={{ uri: "https://td2154.vteximg.com.br/arquivos/ids/923453-1000-1000/98g50461-1.png?v=638532756625370000" }} />
        </View>

        <View className="flex-1 gap-5">
          <Text className="text-2xl">Produto Excepcional</Text>
          <Text className="text-slate-500 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti ipsam magnam, at cumque quam architecto sunt rerum animi reiciendis quibusdam eaque nesciunt ducimus ullam iure tempora! Nisi, repellat earum!</Text>
          <Text className="text-2xl text-green-500">R$ 100,00</Text>
        </View>
      </View>


      <View className="flex w-full h-auto p-10 justify-end">
        <TouchableOpacity className="bg-blue-600 w-full p-5 rounded-full flex items-center">
          <Text className="text-white text-2xl">Comprar agora</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}