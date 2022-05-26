import React from 'react'
import {StyleSheet, Text,ScrollView, View, SafeAreaView,Pressable,Image,} from 'react-native';

const BTnLogin = ({navigation, texto}) => {
  return (
    <Pressable style={styles.btnLogin}onPress={()=>{
        navigation.navigate("Register")
      }}>
        <Text style={styles.txtLogin}>{texto}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    btnLogin:{
        marginTop:30,
        backgroundColor:"#0F74F2",
        marginLeft:100,
        marginRight:100,
        alignItems:"center",
        paddingVertical:10,
        borderRadius:10
      },
      txtLogin:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:15
      }
})
export default BTnLogin
