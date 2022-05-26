import React, {useState}from 'react'
import { StyleSheet, TextInput} from 'react-native';

const Correo = ({correo,setCorreo}) => {
  return (
    <TextInput 
        value={correo}
        onChangeText={setCorreo}
        style={[styles.correo]}
        placeholder='Correo'
        borderBottomColor="#C3E5FD"
        borderBottomWidth={2}
    />
  )
}
const styles = StyleSheet.create({
    correo:{
        marginRight:60,
        marginBottom:40,
        fontSize:20
    }
})
export default Correo
