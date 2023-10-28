import React,{useState,useEffect} from "react";
import { Text, View,Button, Alert } from "react-native";

const UseEffect = ()=>{
    let [count,setCount] = useState(100);

    const increment = ()=>{
        setCount(count++)
    }

    const decrement = ()=>{
        setCount(count--)
    }

    useEffect(()=>{

        Alert.alert("operation done ");

    },[count]);

    return(
        <View>

            <Text>useEffect</Text>
            <Text>Initial value = {count}</Text>
            <View style={{margin:10,gap:10}}>
                <Button title="increment" onPress={increment} />
                <Button title="decrement" onPress={decrement} />

            </View>
           
        </View>
    )
}

export default UseEffect;