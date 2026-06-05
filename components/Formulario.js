import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, TextInput, StyleSheet } from "react-native";
<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState } from "react";
// traemos las librerias para el calendario y las fechas
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

//props
const Formulario = ({ modalVisible, cerrarModal, pacientes, setPacientes }) => {
    // estados para guardar lo que el usuario escribe
    const [paciente, setPaciente] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    // empieza con la fecha de hoy
    const [fecha, setFecha] = useState(dayjs());
    const [openPicker, setOpenPicker] = useState(false);

    // limpiar los campos
    const limpiarCampos = () => {
    setPaciente('');
    setEmail('');
    setTelefono('');
    setFecha(dayjs());
    setSintomas('');
  };

    const handleCita = () => {
        // validacion rapida para que no manden datos vacios
        if([paciente, email, telefono, sintomas].includes('')) {
            console.log('Hay campos vacios');
            return;
        }

        // armamos el objeto con los datos del paciente nuevo
        const nuevoPaciente = {
            id: Date.now().toString(),
            paciente,
            email,
            telefono,
            // le damos formato a la fecha para que se guarde como texto
            fecha: dayjs(fecha).format('DD/MM/YYYY'), 
            sintomas
        };

        // agregamos el paciente nuevo a la lista que ya teniamos
        setPacientes([...pacientes, nuevoPaciente]);
        
        limpiarCampos();
        cerrarModal();
    };
>>>>>>> Stashed changes

const Formulario = () => {
    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [email, setEmail] = useState('')
    return (
<<<<<<< Updated upstream
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
=======
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.formulario}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva <Text style={styles.tituloBold}>Cita</Text></Text>
                    
                    <Pressable 
                        style={styles.btnCancelar}
                        onPress={() => {
                            limpiarCampos();
                            cerrarModal();   
                        }}
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>
                    
                    {/* inputs */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput style={styles.input} placeholder="Nombre Paciente" placeholderTextColor="#666" value={paciente} onChangeText={setPaciente} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Paciente</Text>
                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#666" keyboardType="phone-pad" maxLength={10} value={telefono} onChangeText={setTelefono}/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        
                        <Pressable
                            style={styles.inputPicker}
                            onPress={() => setOpenPicker(!openPicker)}
                        >
                            <Text style={styles.inputText}>
                                {dayjs(fecha).format('DD/MM/YYYY')}
                            </Text>
                            <Text style={styles.iconoCalendario}>📅</Text>
                        </Pressable>

                        {openPicker && (
                            <View style={styles.calendarioContenedor}>
                                <DateTimePicker
                                    mode="single"
                                    date={fecha}
                                    onChange={(params) => {
                                        setFecha(params.date);
                                        setOpenPicker(false); 
                                    }}
                                    selectedItemColor="#5827A4" 
                                    headerButtonColor="#5827A4"
                                />
                            </View>
                        )}
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput 
                            style={[styles.input, { height: 100, textAlignVertical: 'top' }]} placeholder="Describe los síntomas" placeholderTextColor="#666" value={sintomas} onChangeText={setSintomas} multiline={true} numberOfLines={4}
                        />
                    </View>
                    
                    <Pressable 
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text style={styles.btnNuevaCitaTexto}>Guardar</Text>
>>>>>>> Stashed changes
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

<<<<<<< Updated upstream
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
=======
const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF",
    },
    tituloBold: {
        fontWeight: "900",
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
    },
    inputPicker: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputText: {
        color: "#000",
        fontSize: 16
    },
    iconoCalendario: {
        fontSize: 18
    },
    calendarioContenedor: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    formulario: {
        backgroundColor: "#6D28D9",
        flex: 1,
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        color: "#5827A4",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },
});

export default Formulario;
>>>>>>> Stashed changes
