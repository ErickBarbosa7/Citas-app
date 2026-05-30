import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, SafeAreaView, Modal, View, TextInput} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombrePaciente, setNombrePaciente] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>
        Administrador de citas
      </Text>

      <Text style={styles.tituloBold}>
        Veterinaria
      </Text>

      <Modal
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.formulario}>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre Paciente
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre paciente"
              placeholderTextColor="#666"
              value={nombrePaciente}
              onChangeText={setNombrePaciente}
              maxLength={20}
            />

            <Pressable
              style={styles.btnCerrar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.btnTextoCerrar}>
                Cerrar modal
              </Text>
            </Pressable>
          </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20
  },

  titulo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 40
  },

  tituloBold: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '900',
    color: '#6D28D9',
    marginBottom: 40
  },

  formulario: {
    flex: 1,
    backgroundColor: '#6D28D9',
    padding: 20
  },

  campo: {
    marginTop: 30
  },

  label: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },

  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    fontSize: 16
  },

  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    borderRadius: 10
  },

  btnTextoNuevaCita: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },

  btnCerrar: {
    backgroundColor: '#F59E0B',
    padding: 15,
    marginTop: 30,
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