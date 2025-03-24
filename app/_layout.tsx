import { Stack } from "expo-router";

export default function RootLayout() {
  return  (
      <Stack >
        <Stack.Screen 
        name="(Home)" 
        options={{
          title:'Home', 
          ...screeOptions,
        }} 
        />
        <Stack.Screen 
        name="(Detail)" 
        options={{
          title:'Detail',
          ...screeOptions,
        }}
        />
      </Stack>
  );
}

const screeOptions =  {
  headerTitleStyle:{
    color:'white',
    fontSize: 20,

  },
  headerTintColor: 'white',
  headerStyle:{
    backgroundColor:'rgba(7,26,93,255)',

  },
};