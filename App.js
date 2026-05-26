// 1. IMPORTANTE: Debes importar useState desde 'react'
import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
// 2. IMPORTANTE: Agregamos 'Modal' a las importaciones de react-native
import { Pressable, StyleSheet, Text, SafeAreaView, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {" "}
      </Text>

      <Text style={styles.tituloBold}>
        Veterinaria
      </Text>
      
      {/* Conecté tu estado modalVisible al Modal para que funcione correctamente */}
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}>Este es un modal</Text>
          <Pressable 
            style={styles.btnNuevaCita} 
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.btnTextoNuevaCita}> Cerrar modal</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>

      <Pressable 
        style={styles.btnNuevaCita} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>
          Nueva cita
        </Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
    paddingTop: 40 // Añadido para dar un poco de margen superior si usas el SafeAreaView antiguo
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
    textAlign: 'center'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});