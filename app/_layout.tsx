import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {

  return (
    <Stack initialRouteName="login" screenOptions={{headerShown: false}}></Stack>
  );

}