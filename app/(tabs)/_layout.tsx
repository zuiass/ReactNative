import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: "#1f222a",
                height: 60
            }
        }}
        >
            <Tabs.Screen
            name="index"
            options={{
                title: 'Início',
                tabBarIcon: ({ color }) => (
                    <View className='flex-1 justify-center items-center'>
                        <MaterialIcons name='home' size={20} color={color} />
                    </View>
                )
            }}
            />
        </Tabs>
    );
}