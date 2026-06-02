import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const Formulario = ({ modalVisible, cerrarModal, pacientes, setPacientes }) => {
    const [paciente, setPaciente] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleCita = () => {
        if([paciente, email, telefono, fecha, sintomas].includes('')) {
            console.log('Hay campos vacios');
            return;
        }

        const nuevoPaciente = {
            id: Date.now().toString(),
            paciente,
            email,
            telefono,
            fecha,
            sintomas
        };

        setPacientes([...pacientes, nuevoPaciente]);
        setPaciente('');
        setEmail('');
        setTelefono('');
        setFecha('');
        setSintomas('');

        // Cerrar el modal
        cerrarModal();
    };

    return (
        <Modal 
            animationType="slide" 
            visible={modalVisible}
        >
            <SafeAreaView style={styles.formulario}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva <Text style={styles.tituloBold}>Cita</Text></Text>
                    
                    <Pressable 
                        style={styles.btnCancelar}
                        onPress={cerrarModal} 
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>
                    
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput  style={styles.input} placeholder="Nombre Paciente" placeholderTextColor="#666" value={paciente} onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Paciente</Text>
                        <TextInput  style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#666" keyboardType="phone-pad" maxLength={10} value={telefono} onChangeText={setTelefono}/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        <TextInput style={styles.input} placeholder="DD/MM/AAAA" placeholderTextColor="#666" value={fecha} onChangeText={setFecha}
                        />
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
                        <Text style={styles.btnNuevaCitaTexto}>Guardar</Text>
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