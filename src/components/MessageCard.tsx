import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import theme from "@theme/index";
import ImgDefault from "@assets/Church.jpg"

type Props = {
    img?: string,
    title: string,
    description: string,
}

export default function MessageCard({
    description,
    title,
    img
}: Props) {
    return (
        <View style={styles.container}>
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
            <View style={styles.content}>
                <Image
                    source={ImgDefault}
                    style={styles.image}
                />
                <View style={styles.titleWrapper}>
                    <Text style={[styles.text, styles.titleText]}>
                        {title}
                    </Text>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text
                        style={styles.text}
                        numberOfLines={6}
                    >
                        {description}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 280,
        backgroundColor: theme.COLORS.PRUSSIAN_BLUE,
        borderRadius: 30,
        alignItems: "center"
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
    content: {
        width: "90%",
        height: 280,
        alignItems: "center",
        gap: 4,
        padding: 10,
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 50
    },
    titleWrapper: {
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: theme.COLORS.FRENCH_GRAY,
        paddingBottom: 10

    },
    titleText: {
        fontSize: theme.FONT_SIZE.LG,
        fontWeight: 700
    },
    descriptionWrapper: {

    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.FRENCH_GRAY
    },
})