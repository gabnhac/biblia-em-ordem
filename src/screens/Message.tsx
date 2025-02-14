import FeedCard from "@components/FeedCard";
import MessageCard from "@components/MessageCard";
import theme from "@theme/index";
import { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Message(){
    return(
        <SafeAreaView style={styles.container}>
            <MessageCard
                description="Hoje não teremos ensaio"
                title="Cancelamento do ensaio"
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