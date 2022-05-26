import React from 'react'
import { StyleSheet, Text,ScrollView, View, SafeAreaView,Pressable,Image, TextInput} from 'react-native';

const BtnGoogle = ({texto}) => {
  return (
    <Pressable style={styles.btnGoogle}>
        <Image style={styles.imgGoogle}source={require("../img/google.png")}/>
        <Text style={styles.txtGoogle}>{texto}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  btnGoogle:{
    marginTop:20,
    backgroundColor:"#FAE9EA",
    marginLeft:50,
    marginRight:50,
    alignItems:"center",
    paddingVertical:10,
    paddingHorizontal:5,
    borderRadius:10,
    flexDirection:"row"
  },
  txtGoogle:{
    color:"#DD4D44",
    fontWeight:"600",
    fontSize:15
  },
  imgGoogle:{
    width:20,
    height:20,
    marginRight:10,
    marginLeft:7
  }
})

export default BtnGoogle
