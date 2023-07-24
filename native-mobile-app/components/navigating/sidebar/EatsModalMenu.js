import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

const EatsModalMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Fast Food</Text>
            <Text style={styles.modalText}>Pizza</Text>
            <Text style={styles.modalText}>Pasta</Text>
            <Text style={styles.modalText}>Burgers</Text>
            <Pressable
              style={[styles.btnModal, styles.btnCloseModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.btnModal, styles.btnOpenModal]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Food Lovers</Text>
      </Pressable>
    </View>
  );
};

export default EatsModalMenu;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  btnModal: {
    shadowOpacity: 0.6,
    borderRadius: 10,
    marginTop: "14%",
    marginRight: "37%",
    marginLeft: "37%",
    padding: 10,
  },
  btnOpenModal: {
    backgroundColor: "#F194FF",
  },
  btnCloseModal: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 22,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 11,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  modalText: {
    marginBottom: 5,
    display: "flex",
    textAlign: "center",
  },
});
