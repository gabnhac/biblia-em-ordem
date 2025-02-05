import theme from "@theme/index";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';


type Props = {
    location: string,
    title: string,
    img?: string,

}

export default function FeedCard() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.functionIconsWrapper}>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <Octicons name="trash" size={30} color={theme.COLORS.PRINCETON_ORANGE} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <Octicons name="pencil" size={30} color={theme.COLORS.PRINCETON_ORANGE} />
                    </TouchableOpacity>
                </View>
                <Image
                    source={require("@assets/church.jpg")}
                    style={styles.image}
                />
            </View>
            <View style={styles.descriptionWrapper}>
                <View style={styles.titleWrapper}>
                    <TextInput
                        style={[styles.text, styles.titleInput]}
                        value="Ensaio aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    />
                </View>

                <View style={styles.locationWrapper}>


                    <TextInput
                        multiline
                        numberOfLines={2}
                        style={[styles.text, styles.locationInput]}
                        value="Igreja Assembleia de Deus"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 230,
        borderRadius: 30,
        backgroundColor: "#fff",
        shadowColor: "rgba(50, 50, 93, 0.25)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,

    },
    image: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 160,
        width: "100%",

        resizeMode: "cover",
        backgroundColor: "red"

    },
    functionIconsWrapper: {
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        zIndex: 1
    },
    descriptionWrapper: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.COLORS.FRENCH_GRAY,

        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15

    },
    titleWrapper: {
        maxWidth: "45%",

    },
    locationWrapper: {
        maxWidth: "45%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 5,
    },
    locationInputWrapper: {
        flexWrap: "wrap",
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: 15

    },
    titleInput: {

    },
    locationInput: {

    }
})