import FeedCard from "@components/FeedCard";
import theme from "@theme/index";
import { Text, View, StyleSheet } from "react-native";

export default function Feed(){
    return(
        <View style={styles.container}>
            <Text>Feed</Text>
            <FeedCard/>
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