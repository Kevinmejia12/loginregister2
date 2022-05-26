import React, {useState}from 'react'
import { StyleSheet, Text,ScrollView, View, SafeAreaView,Pressable,Image} from 'react-native';
import BtnGoogle from '../assets/components/BtnGoogle';
import Correo from '../assets/components/Correo';
import Contraseña from '../assets/components/Contraseña';
import BTnLogin from '../assets/components/BTnLogin';
import { TextInput } from 'react-native-web';
const Home = ({navigation}) => {
  console.log("mensaje nuevo")
  const [correo,setCorreo] = useState("")
  const [pass,setPass] = useState("")
  return (
    <SafeAreaView style={styles.containerTodo}>
      <ScrollView>
      <View style={styles.container1}>
        <Text style={styles.txtTitulo}>exam
          <Text style={[styles.txtTitulo2, styles.titulo2]}>X</Text>
        </Text>
        <Correo correo={correo} setCorreo={setCorreo} />
        <Contraseña placeholder="Contraseña" pass={pass} setPass={setPass} />
      </View>
        <BTnLogin navigation={navigation} texto={"Iniciar Sesion"}/>
        <BtnGoogle texto={"Iniciar sesion con Google"}/>
        <Pressable style={styles.btnRegister}onPress={()=>{
          navigation.navigate("Register")
        }}>
          <Text style={styles.txtRegister}>Registrarse</Text>
        </Pressable>


        <View style={{alignItems:"center"}}>
        <Image style={styles.imagen} resizeMode="contain" source={require("../assets/img/exam2.png")}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  containerTodo:{backgroundColor:"#FFF",
  flex:1
},
  btnRegister:{
    marginTop:20,
    marginLeft:125,
    marginRight:125,
    alignItems:"center",
    paddingVertical:5,
    borderRadius:10,
    borderBottomColor:"#000",
    borderBottomWidth:1
  },
  txtRegister:{
    color:"#000",
    fontWeight:"300",
    fontSize:14
  },
  
  container1:{
    marginLeft:20
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
  correo:{
    marginRight:60,
    marginBottom:40,
    fontSize:20
  },
  contraseña:{
    marginBottom:70
  },
  imagen:{
    marginLeft:10,
    marginTop:50,
    width:200,
    height:200
  }


})

export default Home
