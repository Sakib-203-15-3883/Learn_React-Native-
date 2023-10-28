import React,{createContext,useContext,useState} from "react";

const counterContext = createContext();

export default function CounterProvider({children}){
    let [count,setCount]=useState(50);

    const increment =()=>{
        setCount(count++);
    }

    const decrement =()=>{
        setCount(count--);
    }

    return(
        <>

        <counterContext.Provider value={{count,increment,decrement}}>
            {children}
        </counterContext.Provider>
        
        
        </>
    )

}

export function useCounter(){
    return useContext(counterContext);
}