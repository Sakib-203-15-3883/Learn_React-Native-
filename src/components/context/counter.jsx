import { Button, Text, View } from "react-native";
import { useCounter } from "./counterContext";
import { Fragment } from "react";

const DisplayContextData = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <>

            <Text style={{fontSize:21,fontWeight:"bold",}}>Initial context value = {count}</Text>
            <View style={{margin:10,gap:10}}>
                <Button title="increment" onPress={increment} />
                <Button title="decrement" onPress={decrement} />

            </View>




        </>
    )
}

export default DisplayContextData; 