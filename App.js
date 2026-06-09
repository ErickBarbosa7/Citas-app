import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';
import InformacionPaciente from './components/InformacionPaciente';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPaciente, setModalPaciente] = useState(false);

  const [paciente, setPaciente] = useState({});
  const [pacientes, setPacientes] = useState([]);

  const cerrarModal = () => {
      setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView>
      <Text style={styles.titulo}>
        Administrador de citas
      </Text>
      
      <Text style={styles.tituloBold}>
        Veterinaria
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => 
        {
          setPaciente({}); 
          setModalVisible(true)}
        }>

        <Text style={styles.btnTextoNuevaCita}>
          Nueva cita
        </Text>
      </Pressable>

      {pacientes.length === 0 ? (
          <Text style={styles.noPacientes}>No hay pacientes aun</Text>
        ) : (
          pacientes.map(item => (
            <Paciente 
              key={item.id}
              item={item}
              setModalVisible={setModalVisible}
              setPacientes={setPacientes}
              setPaciente={setPaciente}
              setModalPaciente={setModalPaciente}
            />
          ))
        )}

      </ScrollView>
      <Formulario 
        modalVisible={modalVisible} cerrarModal={cerrarModal} pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}
      />
      <InformacionPaciente
        paciente={paciente} setPaciente={setPaciente} setModalPaciente={setModalPaciente} modalPaciente={modalPaciente}
      />
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
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  }
});