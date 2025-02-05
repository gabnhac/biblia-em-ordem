import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '@theme/index';

export default function Loading(){
    return(
        <View style={styles.container}>
            <ActivityIndicator
                color={theme.COLORS.PRUSSIAN_BLUE}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.COLORS.FRENCH_GRAY
    },
})