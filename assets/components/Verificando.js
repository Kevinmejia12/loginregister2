import React from 'react'
import { Image,StyleSheet} from 'react-native';

const Verificando = () => {
  return (
    <Image style={styles.img}source={require("../img/verificando.png")}/>
  )
}
const styles = StyleSheet.create({
    img:{
        width:200, 
        height:200,
        marginLeft:70,
        marginTop:50
    }
})
export default Verificando
