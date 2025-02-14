import * as React from 'react';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Feed from './Feed';
import Message from './Message';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import CarouselCard from '@components/CarouselCard';
import theme from '@theme/index';

const renderScene = SceneMap({
    first: Feed,
    second: Message,
});

const routes = [
    { key: 'first', title: 'Eventos', index: 0 },
    { key: 'second', title: 'Recados', index: 1 },
];


export default function FeedSections() {
    const layout = useWindowDimensions();
    const [indexTabBar, setIndexTabBar] = React.useState(0);

    const renderTabBar = () => (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabTopScroll}
            >
                {routes.map(({ title, key, index }) => (
                    <TouchableOpacity
                        key={key}
                        onPress={() => setIndexTabBar(index)}
                        style={[
                            styles.tabWrapper,
                            indexTabBar === index && {
                                borderBottomWidth: 3,
                                borderBottomColor: theme.COLORS.PRINCETON_ORANGE
                            }
                        ]}
                    >
                        <Text 
                            style={[
                                styles.text, 
                                indexTabBar === index && {
                                    color: theme.COLORS.PRINCETON_ORANGE,
                                }
                            ]}
                        >
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <CarouselCard
                />
            </View>
            <TabView
                navigationState={{ index: indexTabBar, routes }}
                renderScene={renderScene}
                onIndexChange={setIndexTabBar}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.PRUSSIAN_BLUE
    },
    tabTopScroll: {
        width: "100%",
        justifyContent: "space-between"
    },
    tabWrapper: {
        width: "50%",
        padding: 10,
        marginBottom: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.FRENCH_GRAY
    }

})