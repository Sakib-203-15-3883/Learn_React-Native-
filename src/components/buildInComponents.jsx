import {useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  
} from 'react-native';

function BuildInComponents() {
  const [userName, setUserName] = useState('');

  const handleUserName = text => {
    setUserName(text);
  };

  const handleSubmit = () => {
    Alert.alert('Button Pressed');
  };
 

  const Styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#1512BB',
      padding: 25,
      textAlign: 'center',
    },

    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'Arial',
    },

    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      marginBottom: 20,
      marginTop: 20,
    },

    buttonContainer: {
      backgroundColor: '#3498db', // Button background color
      padding: 10, // Padding around the button content
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center button content horizontally
    },
    buttonText: {
      fontSize: 18, // Font size of the button text
      color: '#fff', // Text color
      fontWeight: 'bold', // Font weight
    },
  });

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          {/*Start :  Header part  */}

          <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>Learn About Build In Components</Text>
          </View>

          {/*End :  Header part  */}

          {/*Start :  images part   */}
          <View style={Styles.imageContainer}>
            <Image
              source={require('../images/diu-logo.png')}
              style={{width: '80%', height: 100, borderRadius: 10}}
            />

            <Image
              source={require('../images/asset5.png')}
              style={{width: '80%', height: 100, borderRadius: 10}}
            />

            <Image
              source={require('../images/asset3.png')}
              style={{width: '80%', height: 100, borderRadius: 10}}
            />
          </View>

          {/*End  :  images part   */}

          {/*Start :  taking information and display it */}

          <View>
            <TextInput
              style={{
                fontSize: 30,
                textAlign: 'center',
                marginBottom: 5,
                marginTop: 5,
                color: '#fff',
                fontWeight: 'bold',
                borderWidth: 1, borderColor: 'gray', padding: 5 ,borderRadius:10,borderWidth:5,
              }}
              placeholder="Enter your user name"
              value={userName}
              onChangeText={handleUserName}
            
              
            />

            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                marginBottom: 15,
                marginTop: 5,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              User name = {userName}
            </Text>
            {/* <TouchableOpacity style={Styles.buttonContainer}> */}

              <Button title='Submit' style={Styles.buttonText} onPress={handleSubmit }/>


            {/* </TouchableOpacity> */}
          </View>
        </View>
        {/*End :  taking information and display it */}
      </SafeAreaView>
    </ScrollView>
  );
}

export default BuildInComponents;
