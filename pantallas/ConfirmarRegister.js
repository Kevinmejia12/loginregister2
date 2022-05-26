import React,{useState} from 'react'
import { StyleSheet,ScrollView,Alert, TextInput,Text, View, Modal,SafeAreaView,Pressable} from 'react-native';
import Correo from '../assets/components/Correo';
import Usuario from '../assets/components/Usuario';
import Verificando from '../assets/components/Verificando';
const ConfirmarRegister = ({navigation}) => {
    const[usuario,setUsuario] = useState("")
    const[codigo,setCodigo] = useState("")
  return (
    <SafeAreaView style={{backgroundColor:"#fff", flex:1}}>
        <View style={styles.containerTodo}>
            <Text style={styles.txtTitulo}>Confirma tu codigo para continuar</Text>
            <TextInput />
            <Usuario usuario={usuario} setUsuario={setUsuario}/>
            <TextInput 
            value={codigo}
            onChangeText={setCodigo}
            style={[styles.codigo]}
            placeholder='Codigo de verificacion'
            borderBottomColor="#C3E5FD"
            borderBottomWidth={2}/>
            <View style={{alignItems:"center"}}>
                <Pressable style={styles.btnContinuar}>
                    <Text style={styles.txtContinuar}>Verificar</Text>
                </Pressable>

                <Text style={[styles.txtVolver,styles.txtReenviar]}>Reenviar codigo</Text>
                <Text onPress={()=>{
                    Alert.alert(
                        "Volver",
                        "Seguro?, Los cambios no se guardaran",
                        [{text:"Salir", style:"cancel", onPress:(()=>{navigation.navigate("Register")})}, {text:"Permanecer"}]
                    )
                }} style={styles.txtVolver}>Volver al registro</Text>
            </View>
            <Verificando/>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

    txtVolver:{
        fontSize:13,
        fontWeight:"200",
        color:"#0F74F2"
    },
    containerTodo:{
        padding:10,
        backgroundColor:"#FFF"
    },
    txtTitulo:{
        fontSize:18,
        marginBottom:50,
        marginTop:20
    },
    codigo:{
        marginRight:60,
        marginBottom:60,
        fontSize:20,
        marginTop:20
    },
    btnContinuar:{
        backgroundColor:"#0F74F2",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginBottom:30
    },
    txtContinuar:{
        color:"#FFF",
        fontWeight:"bold"
    },
    txtReenviar:{
        color:"orange",
        fontSize:15,
        marginBottom:20
    }

})

export default ConfirmarRegister
