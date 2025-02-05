import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";

export default function Formulario(){
    return(
        <View style={styles.container}>
            <Text>Formulario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.COLORS.FRENCH_GRAY,

    }
});