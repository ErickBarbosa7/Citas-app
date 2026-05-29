<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
=======
import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, SafeAreaView, Modal, View, TextInput } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombrePaciente, setNombrePaciente] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {" "}
      </Text>

      <Text style={styles.tituloBold}>
        Veterinaria
      </Text>

     
      <Modal style={styles.formulario} visible={modalVisible} animationType="slide">
          <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <Text>Nombre paciente</Text>
          <TextInput 
          style={styles.input}
          placeholder='Nombre paciente'
          placeholderTextColor={'#666'}
          value={nombrePaciente}
          onChangeText={setNombrePaciente}
          maxLength={20}
          multiline={true}
          numberOfLines={4}
          keyboardType='email-address'
          />
          
          <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(false)}>
            <Text style={styles.btnTextoNuevaCita}> Cerrar modal</Text>
          </Pressable>
          </View>
      </Modal>

      <Pressable 
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>
          Nueva cita
        </Text>
      </Pressable>
    </SafeAreaView>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#6D28D9',
    flex: 1
  },
  container: {
<<<<<<< Updated upstream
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  
  // ---------------------------------------
  btnCerrar: {
    backgroundColor: '#F59E0B', 
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoCerrar: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});
>>>>>>> Stashed changes
