import theme from "@theme/index";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Animated, { withTiming } from "react-native-reanimated";
import { useSharedValue } from 'react-native-reanimated';

import ImgDefault from "@assets/Church.jpg";
import { useState } from "react";

type Props = {
    location: string,
    title: string,
    description?: string,
    img?: string,
}

export default function FeedCard({
    location,
    title,
    img,
    description
}: Props) {
    const height = useSharedValue(240);
    const [isCardOpen, setIsOpenCard] = useState(false);

    function handleOpenCard() {
        height.value = withTiming(340);
        setTimeout(() => {
            setIsOpenCard(true);

        }, 300)
    }

    function handleCloseCard() {
        height.value = withTiming(240);
        setIsOpenCard(false);
    }

    return (
        <Animated.View style={[styles.container, { height }]}>
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
                {img ?
                    <Image
                        source={{ uri: img }}
                        style={styles.image}
                    />
                    :
                    <Image
                        source={ImgDefault}
                        style={styles.image}
                    />

                }
            </View>
            <View style={styles.descriptionWrapper}>
                <View style={styles.titleWrapper}>
                    <Text
                        style={[styles.text, styles.titleText]}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{title}</Text>
                </View>

                <View style={styles.locationWrapper}>
                    <Ionicons name="location-sharp" size={18} color={theme.COLORS.AEROSPACE_ORANGE} />
                    <Text
                        style={[styles.text, styles.locationText]}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >{location}</Text>
                </View>
            </View>
            {description &&
                <View style={styles.expandCardWrapper}>
                    {isCardOpen ?
                        <>
                            <Text
                                numberOfLines={4}                            
                                style={[styles.text, styles.descriptionText]}
                            >
                                {description}
                            </Text>
                            <TouchableOpacity
                                onPress={handleCloseCard}
                            >
                                <MaterialIcons name="expand-less" size={27} color="black"
                                    style={{ alignSelf: "center" }}
                                />
                            </TouchableOpacity>
                        </>
                        :
                        <TouchableOpacity
                            onPress={handleOpenCard}
                        >
                            <MaterialIcons name="expand-more" size={27} color="black"
                                style={{ alignSelf: "center" }}
                            />
                        </TouchableOpacity>
                    }
                </View>
            }
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        borderRadius: 30,
        backgroundColor: theme.COLORS.FRENCH_GRAY,
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
        flexDirection: "row",

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
        maxWidth: "50%",
        flexDirection: "row",
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM

    },
    titleText: {

    },
    locationText: {

    },
    descriptionText: {
        marginBottom: 10,
        alignSelf: "center",
        flexWrap: "wrap",
    },
    expandCardWrapper: {
        flex: 1,
        justifyContent: "flex-end"
    },
})