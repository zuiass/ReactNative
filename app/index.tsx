import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
    
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>{contador}</Text>

            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <Text>Aumentar</Text>
            </TouchableOpacity>

            <Image></Image>

            <Text>{nome}</Text>
            <TextInput onChangeText={setNome}></TextInput>
        </View>
    );
}