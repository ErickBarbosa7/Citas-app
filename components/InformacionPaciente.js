import React from 'react';
import { Modal, SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente, modalPaciente }) => {
    return (
        <Modal animationType="slide" visible={modalPaciente}>
            <SafeAreaView style={styles.contenedor}>
                
                <Text style={styles.titulo}>Informacion <Text style={styles.tituloBold}>Paciente</Text></Text>

                <Pressable style={styles.btnCerrar}
                    onPress={() => {
                        setModalPaciente(false);
                        setPaciente({}); 
                    }}>
                        
                    <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
                </Pressable>

                <View style={styles.contenido}>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre:</Text>
                        <Text style={styles.valor}>{paciente?.paciente}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Propietario:</Text>
                        <Text style={styles.valor}>{paciente?.propietario}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.valor}>{paciente?.email}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono:</Text>
                        <Text style={styles.valor}>{paciente?.telefono}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta:</Text>
                        <Text style={styles.valor}>{paciente?.fecha}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas:</Text>
                        <Text style={styles.valor}>{paciente?.sintomas}</Text>
                    </View>
                </View>

            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#ffb22d', 
        flex: 1,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        marginTop: 30,
        fontWeight: '600',
    },
    tituloBold: {
        fontWeight: '900',
    },
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#D97706', 
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    contenido: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    campo: {
        marginBottom: 15,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12,
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155',
    }
});

export default InformacionPaciente;