import { BottomTabNavigationProp, createBottomTabNavigator,  } from "@react-navigation/bottom-tabs";
import defaultTheme from '@theme/index'

import Feed from "@screens/Feed";
import Formulario from "@screens/Formulario";
import Relatorio from "@screens/Relatorio";
import Turmas from "@screens/Turmas";
import { Platform } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

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
                tabBarStyle:{
                    backgroundColor: theme.COLORS.FRENCH_GRAY,
                    height: Platform.OS === 'android' ? 70 : 96,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                
                
            }}
        >
            <Screen
                name="feed"
                component={Feed}
                options={{
                    tabBarIcon: ({focused}) => {
                        let color = focused ? theme.COLORS.PRINCETON_ORANGE : theme.COLORS.PRUSSIAN_BLUE;
                        return (
                            <Entypo name="home" size={30} color={color} />

                        )
                    }
                    
                }}
            />
            <Screen
                name="turmas"
                component={Turmas}
                options={{
                    tabBarIcon: ({focused}) => {
                        let color = focused ? theme.COLORS.PRINCETON_ORANGE : theme.COLORS.PRUSSIAN_BLUE;
                        return (
                            <MaterialIcons name="description" size={30} color={color} />
                        )
                    }
                }}
            />
            <Screen
                name="formulario"
                component={Formulario}
                options={{
                    tabBarIcon: ({focused}) => {
                        let color = focused ? theme.COLORS.PRINCETON_ORANGE : theme.COLORS.PRUSSIAN_BLUE;
                        return(
                            <Entypo name="clipboard" size={30} color={color} />

                        )
                    }
                    
                }}
            />
            <Screen
                name="relatorio"
                component={Relatorio}
                options={{
                    tabBarIcon: ({focused}) => {
                        let color = focused ? theme.COLORS.PRINCETON_ORANGE : theme.COLORS.PRUSSIAN_BLUE;
                        return (
                            <MaterialIcons name="description" size={30} color={color} />

                        )
                    } 
                    
                }}
            />
        </Navigator>
    )
}