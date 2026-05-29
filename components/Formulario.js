import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, TextInput, StyleSheet } from "react-native";
import React from "react";

const Formulario = () => {
    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [email, setEmail] = useState('')
    return (
        <Modal>
            <SafeAreaView>
                <ScrollView>
                    <Text> Nueva Cita</Text>
                    <Pressable>
                        <Text> X Cancelar</Text>
                    </Pressable>
                    <View>
                        <Text>Nombre del Paciente</Text>
                        <TextInput/>
                    </View>
                    <Pressable>
                        <Text> Guardar</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

const style = StyleSheet.create({
    campo:{
      marginTop:10,
      marginHorizontal:30
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
  },
  contenidoModal: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  label: {
    color: '#374151', 
    marginBottom: 10, 
    marginTop: 40,
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 16
  },
})

export default Formulario