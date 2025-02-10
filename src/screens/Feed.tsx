import FeedCard from "@components/FeedCard";
import MessageCard from "@components/MessageCard";
import theme from "@theme/index";
import { Text, View, StyleSheet } from "react-native";

export default function Feed(){
    return(
        <View style={styles.container}>
            
            <FeedCard
                location="Igreja Assembléia de Deus"
                title="Ensaio de Jovens"
                description="Oi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaa"
            />

            <MessageCard
                description="Hoje a noite não haverá ensaio 
                porque o lider não pode comparecer. Oremos 
                em prol dele pra que tudo ocorra bem. 
                aaaaaa aaaaa aaaaa aaaaaa aaa aaaaaa aaaaaa 
                aaaaaaaa aaaaa aaaaaaaaaaaaaaaaa aaa aaaa aaaaa aaaa aaaaaaa aaaaaaa"
                title="Cancelamento do ensaio"
            />
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