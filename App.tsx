import {ScrollView, View,} from "react-native"
import BuildInComponents from "./src/components/buildInComponents";
import CounterProvider from "./src/components/context/counterContext";
import DisplayContextData from "./src/components/context/counter";
import  UseState from "./src/components/hooks/useState";
import UseEffect from "./src/components/hooks/useEffect"
function App() {
  return (
  <View>
    <ScrollView>
    <CounterProvider>
    <BuildInComponents/>
    <DisplayContextData/>
    <BuildInComponents/>
    < UseState/>
    <UseEffect/>
    </CounterProvider>
    </ScrollView>

   

  </View>
  );
};

export default App;
