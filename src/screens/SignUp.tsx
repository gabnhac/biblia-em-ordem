import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp(){
    return(
        <View  style={styles.container}>
            <Text>SignUp</Text>
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