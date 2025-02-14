import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrayJpg from "@assets/pray.jpg";
import theme from "@theme/index";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import React, { useRef } from "react";

type Props = {

}

export default function CarouselCard() {
    const width = Dimensions.get("window").width;
    const progress = useSharedValue<number>(0);
    const refCarousel = useRef<ICarouselInstance>(null);

    const data = [
        {
            title: "Revista 1",
            lesson: "Lição 5"
        },
        {
            title: "Revista 2",
            lesson: "Lição 6"
        },
        {
            title: "Revista 3",
            lesson: "Lição 7"
        },
    ]

    const onPressPagination = (index: number) => {
        refCarousel.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentWraper}>
                <Carousel
                    ref={refCarousel}
                    data={data}
                    width={width}
                    height={130}
                    loop={false}
                    onProgressChange={progress}
                    renderItem={({ item, index }) => (
                        <View>
                            <Image
                                source={PrayJpg}
                                style={styles.image}
                            />
                            <View style={styles.textWrapper}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.text}>{item.lesson}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <Pagination.Basic
                progress={progress}
                data={data}

                activeDotStyle={{backgroundColor: theme.COLORS.PRUSSIAN_BLUE}}
                onPress={onPressPagination}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        gap: 5

    },
    contentWraper: {
        height: 115
    },
    image: {
        width: "98%",
        height: 115,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 10
    },
    textWrapper: {
        position: "absolute",
        padding: 15
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.FRENCH_GRAY
    },
})