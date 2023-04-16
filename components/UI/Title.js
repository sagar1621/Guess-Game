import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles=StyleSheet.create({
    title:{
        fontSize:19,
        color:"white",
        fontFamily:'open-sans-bold',
        textAlign:'center',
        borderWidth:2,
        borderColor:"white",
        padding:12,
    }
})