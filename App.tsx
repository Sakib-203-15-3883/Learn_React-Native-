import {ScrollView, View} from "react-native"
import BuildInComponents from "./src/components/buildInComponents";
import CounterProvider from "./src/components/context/counterContext";
import DisplayContextData from "./src/components/context/counter";
function App() {
  return (
  <View>
    <ScrollView>
    <CounterProvider>
    <BuildInComponents/>
    <DisplayContextData/>
    <BuildInComponents/>
    </CounterProvider>
    </ScrollView>

   

  </View>
  );
};

export default App;
