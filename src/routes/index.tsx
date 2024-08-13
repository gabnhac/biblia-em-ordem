import { View } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

import themeDefault from '@theme/index'

export default function Routes(){
    const theme = themeDefault;
    return(
        <View style={{flex: 1, backgroundColor: theme.COLORS.FRENCH_GRAY}}>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </View>
    )
}