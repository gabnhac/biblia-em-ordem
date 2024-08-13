import { BottomTabNavigationProp, createBottomTabNavigator,  } from "@react-navigation/bottom-tabs";
import defaultTheme from '@theme/index'

import Feed from "@screens/Feed";
import Formulario from "@screens/Formulario";
import Relatorio from "@screens/Relatorio";
import Turmas from "@screens/Turmas";
import { Platform } from "react-native";

type AppRoutes = {
    feed: undefined,
    formulario: undefined,
    relatorio: undefined,
    turmas: undefined,
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
const theme = defaultTheme;

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.COLORS.PRINCETON_ORANGE,
                tabBarInactiveTintColor: theme.COLORS.PRUSSIAN_BLUE,
                tabBarStyle:{
                    backgroundColor: theme.COLORS.FRENCH_GRAY,
                    height: Platform.OS === 'android' ? 70 : 96,
                    
                }
            }}
        >
            <Screen
                name="feed"
                component={Feed}
                
            />
            <Screen
                name="turmas"
                component={Turmas}
            />
            <Screen
                name="formulario"
                component={Formulario}
            />
            <Screen
                name="relatorio"
                component={Relatorio}
            />
        </Navigator>
    )
}