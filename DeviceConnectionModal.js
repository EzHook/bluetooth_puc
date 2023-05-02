import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'

const DeviceModalListItem = ( props ) => {
    const { item, connectToPeripheral, closeModal} = props;
   
    const connectAndCloseModal = useCallback(()=> {
        connectToPeripheral(item.item);
        closeModal();
    },[closeModal, connectToPeripheral, item.item]);

    return (
        <TouchableOpacity
        onPress={connectAndCloseModal}
        style={styles.ctaButton}
        >
            <Text style={styles.ctaButtonText}>{item.item.name}</Text>
        </TouchableOpacity>
    )
}

const DeviceModal = ( props ) => {
    const { devices, visible, connectToPeripheral, closeModal} = props;

    const renderDeviceModalListItem = useCallback(
        (item) => {
            return(
                <DeviceModalListItem
                item={item}
                connectToPeripheral={connectToPeripheral}
                closeModal={closeModal}
                />
            );
        },[closeModal, connectToPeripheral]
    );

  return (
   <Modal
    style={styles.modalContainer}
    animationType='slide'
    transparent={false}
    visible={visible}
    >
    <SafeAreaView style={styles.modalTitle}>
        <Text style={styles.modalTitleText}>
            Tap on a device to connect
        </Text>
        <FlatList
        contentContainerStyle={styles.modalFlatlistContiner}
        data={devices}
        renderItem={renderDeviceModalListItem} />
    </SafeAreaView>
   </Modal>
  )
}

export default DeviceModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#f2f2f2",
      },
      modalFlatlistContiner: {
        flex: 1,
        justifyContent: "center",
      },
      modalCellOutline: {
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
      },
      modalTitle: {
        flex: 1,
        backgroundColor: "#f2f2f2",
      },
      modalTitleText: {
        marginTop: 40,
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 20,
        textAlign: "center",
      },
      ctaButton: {
        backgroundColor: "#FF6060",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 8,
      },
      ctaButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
})