import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useBle from './useBle';
import { useState } from 'react';
import DeviceModal from './DeviceConnectionModal';

export default function App() {

  const {
    requestPermissions,
    scanForPeripherals
  } = useBle();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scanForDevices = async() => {
    const isPermissionsEnabled = await requestPermissions();
    if(isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar />
      <Text style={styles.Heading}>Search for nearby Devices</Text>
      <View>
        <TouchableOpacity
        onPress={openModal}>
          <Text>Connect</Text>
        </TouchableOpacity>
        <DeviceModal
          closeModal={hideModal}
          visible={isModalvisible}
          connectToPeripheral ={()=>{}}
          devices={[]}
         />
      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading : {
    fontWeight: "bold",
    fontSize: 20 ,
    fontFamily:"sans-serif"
    
  }
});
