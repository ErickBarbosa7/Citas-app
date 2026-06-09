import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const Formulario = ({
     modalVisible, 
     cerrarModal, 
     pacientes, 
     setPacientes,
     paciente,
     setPaciente
    }) => {
    // estados para guardar lo que el usuario escribe
    const [pacienteState, setPacienteState] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState(dayjs());
    
    useEffect(() => {
        if (paciente?.id) {
            setPacienteState(paciente.paciente);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setTelefono(paciente.telefono);
            setSintomas(paciente.sintomas);
            
            const [dia, mes, anio] = paciente.fecha.split('/');
            setFecha(dayjs(new Date(anio, mes - 1, dia)));
        } else {
            setPacienteState('');
            setPropietario('');
            setEmail('');
            setTelefono('');
            setFecha(dayjs());
            setSintomas('');
        }
    }, [paciente]);

    const limpiarCampos = () => {
    setPacienteState('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(dayjs());
    setSintomas('');
    setPaciente({});
};
    const [openPicker, setOpenPicker] = useState(false);

   

    const handleCita = () => {
        // validacion para que no manden datos vacios
        if([pacienteState, propietario, email, telefono, sintomas].includes('')) {
            console.log('Hay campos vacios');
            return;
        }

        // armamos el objeto con los datos del paciente nuevo
        const datosPaciente = {
            paciente: pacienteState,
            propietario,
            email,
            telefono,
            fecha: dayjs(fecha).format('DD/MM/YYYY'),
            sintomas
        };
        
        if (paciente?.id) {
            // Editar
            const pacientesActualizados = pacientes.map(p =>
                p.id === paciente.id ? { ...datosPaciente, id: paciente.id } : p
            );
            setPacientes(pacientesActualizados);
            setPaciente({});  // limpiar paciente global
        } else {
            // Crear
            const nuevoPaciente = { id: Date.now().toString(), ...datosPaciente };
            setPacientes([...pacientes, nuevoPaciente]);
        }
        
        // limpiar el formulario
        limpiarCampos();
        cerrarModal();
    };

    return (
        <Modal 
            animationType="slide" 
            visible={modalVisible}
        >
            <SafeAreaView style={styles.formulario}>
                <ScrollView>
                    <Text style={styles.titulo}>
                    {paciente?.id ? 'Editar' : 'Nueva'} {''} <Text style={styles.tituloBold}>Cita</Text>
                    </Text>
                    
                    <Pressable 
                        style={styles.btnCancelar}
                        onPress={() => {
                            limpiarCampos();
                            cerrarModal();  
                        }}
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>
                    
                    {/* inputs  */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput style={styles.input} placeholder="Nombre Paciente" placeholderTextColor="#666" value={pacienteState} onChangeText={setPacienteState} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput style={styles.input} placeholder="Nombre Propietario" placeholderTextColor="#666" value={propietario} onChangeText={setPropietario} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#666" keyboardType="phone-pad" maxLength={10} value={telefono} onChangeText={setTelefono}/>
                    </View>

                    {/* area del calendario */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        
                        <Pressable
                            style={styles.inputPicker}
                            onPress={() => setOpenPicker(!openPicker)}
                        >
                            <Text style={styles.inputText}>
                                {dayjs(fecha).format('DD/MM/YYYY')}
                            </Text>
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
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput 
                            style={[styles.input, { height: 100, textAlignVertical: 'top' }]} placeholder="Describe los síntomas" placeholderTextColor="#666" value={sintomas} onChangeText={setSintomas} multiline={true} numberOfLines={4}
                        />
                    </View>
                    
                    <Pressable 
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text style={styles.btnNuevaCitaTexto}>{paciente?.id ? 'Editar Paciente' : 'Guardar'}</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

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