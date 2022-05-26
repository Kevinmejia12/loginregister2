import React, {useState}from 'react'
import { StyleSheet,ScrollView,Alert, TextInput,Text, View, Modal,SafeAreaView,Pressable} from 'react-native';
import Correo from '../assets/components/Correo';
import Contraseña from '../assets/components/Contraseña';
import BtnGoogle from '../assets/components/BtnGoogle';
import Contraseña2 from '../assets/components/Contraseña2';
import Politicas from '../assets/components/Politicas';
import Usuario from '../assets/components/Usuario';
import Verificando from '../assets/components/Verificando';
const Register = ({navigation}) => {
  const [correo,setCorreo] = useState("")
  const [pass,setPass] = useState("")
  const [pass2,setPass2] = useState("")
  const [usuario,setUsuario] = useState("")
  const [modal1,setModal1] = useState(false)

  const Verificar = () =>{
    if([correo,usuario,pass,pass2].includes("")){
      Alert.alert(
        "ERROR",
        "Todos los campos son requeridos",
        [{text:"Salir", onPress:()=>{
          navigation.navigate("Home")
        }, style:"cancel"}, {text:"Ok"}]
      )
    }
    else if(pass !== pass2){
      Alert.alert("Las contraseñas deben ser iguales")
    }else{
      navigation.navigate("ConfirmarRegister")
      setCorreo("")
      setUsuario("")
      setPass("")
      setPass2("")
    }
  }
  return (
    <>
     <SafeAreaView style={{backgroundColor:"#0F74F2",flex:1}}>
     <ScrollView>
      <View style={styles.containerTodo}>
        <Text style={styles.txtTitulo}>examen
          <Text style={styles.txtTitulo2}>X</Text>
        </Text>
        <Usuario usuario={usuario} setUsuario={setUsuario} />
        <Correo correo={correo} setCorreo={setCorreo}/>
        <Contraseña placeholder={"Contraseña"} pass={pass} setPass={setPass}/>
        <Contraseña2 placeholder={"Repetir contraseña"} pass2={pass2} setPass2={setPass2} />        
        
        <Pressable style={styles.btnRegister} onPress={()=>Verificar()}>
          <Text style={styles.txtRegister}>Registrarse</Text>
        </Pressable>
        <Text style={styles.txtPrivacidad}>Al registrarse estas aceptando nuesta politica de privacidad {" "}</Text>
        <View style={styles.containerPrivacidad}>
          <Pressable onPress={()=>{setModal1(true)}} style={styles.btnVer}>
            <Text style={[styles.txtPrivacidad, styles.txtPrivacidadVer]}>Ver nuestra politca</Text>
          </Pressable>
        </View>
        <Modal
        animationType='slide'
        visible={modal1}>
          <Politicas setModal1={setModal1}/>
        </Modal>
        <BtnGoogle texto={"Registrarse Google"} />

        <Pressable style={styles.btnVolver} onPress={()=>{
          Alert.alert(
            "Volver",
            "Seguro?, Los cambios no se guardaran",
            [{text:"Salir", style:"cancel", onPress:(()=>{navigation.navigate("Home")})}, {text:"Permanecer"}])
        }}>
          <Text style={styles.txtVolver}>Regresar</Text>
        </Pressable>
      </View>
     </ScrollView>
     </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  containerBTns:{
    marginTop:20,
    alignItems:"center"
  },
  btnVolver:{
    borderColor:"#0F74F2",
    borderWidth:1,
    marginRight:80,
    marginLeft:80,
    paddingVertical:5,
    alignItems:"center",
    borderRadius:5,
    marginTop:20,
    marginBottom:20
  },
  txtVolver:{
    fontSize:15,
    fontWeight:"200"
  },
  containerTodo:{
    backgroundColor:"#FFF",
    marginRight:20,
    marginLeft:20,
    marginTop:30,
    borderRadius:5,
    padding:10,

    shadowColor: "#000",
    shadowOffset: {
      width: 18,
      height: 18,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  txtTitulo:{
    fontSize:30,
    marginTop:20,
    marginBottom:30
  },
  txtTitulo2:{
    fontSize:35,
    color:"#002060",
    fontWeight:"800"
  },
  usuario:{
    marginRight:60,
    marginBottom:40,
    fontSize:20
  },
  btnRegister:{
    backgroundColor:"#0F74F2",
    marginRight:60,
    marginLeft:60,
    paddingVertical:10,
    paddingHorizontal:10,
    alignItems:"center",
    borderRadius:10

  },
  txtRegister:{
    color:"#FFF",
    fontWeight:"bold"
  },
  containerPrivacidad:{
    alignItems:"center"
  },
  txtPrivacidad:{
    marginTop:12,
    fontSize:10,
    color:"silver"
  },
  btnVer:{
    height:30,
    alignItems:"center"
  },
  txtPrivacidadVer:{
    fontSize:12,
    marginTop:0,
    color:"orange"
  }
  
})

export default Register
