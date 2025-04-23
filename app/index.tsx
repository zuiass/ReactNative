import { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

// L I S T

const imagens = [
    require('../assets/IMG-1.jpg'),
    require('../assets/IMG-2.jpg'),
    require('../assets/IMG-3.jpg'),
    require('../assets/IMG-4.jpg'),
    require('../assets/IMG-5.jpg'),
    require('../assets/IMG-6.jpg')
];

const respostas = [
    { andar: '0º andar', descricao: 'Pátio' },
    { andar: '0º andar', descricao: 'Corredor' },
    { andar: '1º andar', descricao: 'Entrada' },
    { andar: '2º andar', descricao: 'Mercado' },
    { andar: '3º andar', descricao: 'Microsoft' },
    { andar: '2º andar', descricao: 'Loja de roupas' }
];

const opcoes = [
    '-1º andar', '0º andar', '1º andar', '2º andar', '3º andar'
];

// H T M L

export default function Index() {

    const [indiceAtual, setIndiceAtual] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [descricao, setDescricao] = useState("");
    const [andarSelecionado, setAndarSelecionado] = useState("");

    function verificarResposta() {
        const respostaCerta = respostas[indiceAtual];
        const andarOK = andarSelecionado === respostaCerta.andar;
        const descricaoOK = descricao.trim().toLowerCase() === respostaCerta.descricao.trim().toLowerCase();

        if (andarOK && descricaoOK) {
            setFeedback("✅ Resposta correta!");
            setTimeout(() => {
                setIndiceAtual((prev) => (prev + 1) % imagens.length);
                setFeedback("");
                setDescricao("");
                setAndarSelecionado("");
            }, 2000);
        } else {
            setFeedback("❌ Resposta errada...");
            setTimeout(() => setFeedback(""), 1500);
        }
    }

    return (
        <View className="flex-1 max-h-[100%] bg-gray-900 items-center">
            {
            feedback !== "" && (
            <View className="absolute flex flex-row z-10 mt-7 w-56 items-center bg-yellow-500 p-4 rounded-2xl">
                <Text className="text-white text-lg font-bold">{feedback}</Text>
            </View>
            )
            }

            <View className="flex-1 w-full p-5 justify-between gap-10">
                <View className="flex-1 bg-slate-800 rounded-2xl overflow-hidden items-center justify-center">
                    <Image source={imagens[indiceAtual]} className="w-full h-full" resizeMode="cover" />
                </View>

                <View className="flex flex-wrap flex-row justify-between gap-2">
                    {opcoes.map((opcao, index) => (
                    <TouchableOpacity
                    key={index}
                    className={`flex-1 p-3 rounded-xl items-center justify-center ${andarSelecionado === opcao ? 'bg-violet-500' : 'bg-violet-600'}`}
                    onPress={() => setAndarSelecionado(opcao)}
                    >
                        <Text className="text-white text-lg">{opcao}</Text>
                    </TouchableOpacity>
                    ))}
                </View>

                <View className="w-full relative">
                    <TextInput
                    value={descricao}
                    onChangeText={setDescricao}
                    className="w-full h-[60px] text-white bg-slate-800 rounded-full p-4 text-lg"
                    placeholder="Escreva uma descrição..."
                    placeholderTextColor="#707070"
                    style={{ paddingRight: 60, paddingLeft: 20 }}
                    />

                    <TouchableOpacity
                    className="absolute right-0 bg-violet-600 rounded-full p-3 mr-2 top-[6px]"
                    onPress={verificarResposta}
                    >
                        <Image source={require('../assets/send.svg')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}