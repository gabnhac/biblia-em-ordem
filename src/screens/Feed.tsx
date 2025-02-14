import FeedCard from "@components/FeedCard";
import theme from "@theme/index";
import { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Feed(){
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    return(
        <SafeAreaView style={styles.container}>
            <FeedCard
                location="Igreja Assembléia de Deus"
                title="Ensaio de Jovens"
                description="Hoje teremos ensaio"

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.COLORS.FRENCH_GRAY,

    },
    header: {
        height: "30%",
        backgroundColor: theme.COLORS.PRUSSIAN_BLUE
    }
});