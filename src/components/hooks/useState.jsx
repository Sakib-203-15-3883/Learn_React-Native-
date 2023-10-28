import React,{useState} from "react";
import { Text, View,Button } from "react-native";

const UseState = ()=>{
    let [count,setCount] = useState(100);

    const increment = ()=>{
        setCount(count++)
    }

    const decrement = ()=>{
        setCount(count--)
    }

    return(
        <View>

            <Text>Initial state value = {count}</Text>
            <View style={{margin:10,gap:10}}>
                <Button title="increment" onPress={increment} />
                <Button title="decrement" onPress={decrement} />

            </View>
           
        </View>
    )
}

export default UseState;