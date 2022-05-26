import React from 'react'
import { StyleSheet,ScrollView,Alert, TextInput,Text, View, Modal,SafeAreaView,Pressable} from 'react-native';

const Usuario = ({usuario,setUsuario}) => {
  return (
    <TextInput
        value={usuario}
        onChangeText={setUsuario}
        style={[styles.usuario]}
        placeholder='Usuario'
        borderBottomColor="#C3E5FD"
        borderBottomWidth={2}
    />
  )
}
const styles = StyleSheet.create({
    usuario:{
        marginRight:60,
        marginBottom:40,
        fontSize:20
    }
})
export default Usuario
