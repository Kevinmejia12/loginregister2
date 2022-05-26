import React,{useState} from 'react'
import { StyleSheet, TextInput} from 'react-native';

const Contraseña2 = ({placeholder,pass2,setPass2}) => {

  return (
    <TextInput 
    value={ pass2}
    onChangeText={setPass2}
    secureTextEntry={true}
    style={[styles.correo,styles.contraseña]}
    placeholder={placeholder}
    borderBottomColor="#C3E5FD"
    borderBottomWidth={2}
    />
  )
}
const styles = StyleSheet.create({
    correo:{
        marginRight:60,
        marginBottom:20,
        fontSize:20
    },
    contraseña:{
        marginBottom:40
      }

})

export default Contraseña2