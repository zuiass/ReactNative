import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
    
    const [lista, setLista] = useState([

    ]);

    const [novaTarefa, setNovaTarefa] = useState("");

    const addTarefa = () => {
        if (novaTarefa.trim() === "") return;

        const tarefaObjeto = {
            id: lista.length + 1,
            tarefa: novaTarefa
        };

        setLista([...lista, tarefaObjeto]);
        setNovaTarefa("");
    };

    return (
        <View className="flex-1 bg-white">
            <View className="flex-1 p-6 gap-3 justify-between">
                <View className="flex-1 bg-gray-300 rounded-xl overflow-hidden">
                    <View className="w-full shadow-md p-4 bg-none">
                        <Text className="text-2xl opacity-50">Suas tarefas: {lista.length}</Text>
                    </View>

                    <ScrollView className="flex-1 p-5" style={{paddingBottom: 50}}> 
                        <View>
                            {
                            lista.map((item) => (
                                <Text className="text-lg" key={item.id}>
                                    •  {item.tarefa}
                                </Text>
                            ))
                            }
                        </View>
                    </ScrollView>
                </View>

                <View className="flex h-12 flex-row justify-between gap-1">
                    <TextInput
                        className="rounded-full w-auto text-xl p-2 border"
                        placeholder="Digite uma tarefa..."
                        value={novaTarefa}
                        onChangeText={setNovaTarefa}
                    ></TextInput>

                    <TouchableOpacity onPress={addTarefa} className="bg-blue-500 p-2 rounded-full flex items-center justify-center" style={{width: 48, height: 48}}>
                        <Text className="flex items-center justify-center text-white text-2xl">+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}