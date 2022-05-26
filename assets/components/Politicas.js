import React from 'react'
import { StyleSheet,SafeAreaView,View, Text,Pressable} from 'react-native';

const Politicas = ({setModal1}) => {
  return (
      <SafeAreaView>
          <View style={styles.containerP}>
            <Text>Te vamos a robar el dinero</Text>
            <Pressable onPress={()=>{setModal1(false)}} style={styles.btnRobar}>
                <Text style={styles.txtRobar}>Perfecto</Text>
            </Pressable>
        </View>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    containerP:{
        alignItems: 'center',
        backgroundColor:"#0F74F2"
    },
    btnRobar:{
        marginTop:20,
        backgroundColor:"#FFF",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
    },
    txtRobar:{
        color:"black"
    }

})
export default Politicas
