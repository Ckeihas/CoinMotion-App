import { createBottomTabNavigator, BottomTabBarProps, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, LayoutChangeEvent, Pressable, Text, Dimensions } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import StockScreen from "../screens/StockScreen";
import NftScreen from "../screens/NftScreen";
import WalletScreen from "../screens/WalletScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useReducer, useRef } from "react";
import Animated, { useDerivedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg"
import { BlurView } from "expo-blur";
import { Feather } from '@expo/vector-icons';
import { HomeIconWithLinearGradient, StockIconWithLinearGradient, WalletIconWithLinearGradient, SettingsIconWithLinearGradient } from "../components/svg/Svg";





export type BottomTabParamList = {
    home: undefined;
    stocks: undefined;
    nft: undefined;
    wallet: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const { width } = Dimensions.get('window')
const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors } : BottomTabBarProps) => {
    return(
        <BlurView intensity={80} style={styles.tabBar}>
            <View style={styles.tabBarContainer}>
            {routes.map((route, index) => {
                const active = index === activeIndex
                const { options } = descriptors[route.key]
                return(
                    <TabBarComponent 
                    key={route.key}
                    active={active}
                    options={options}
                    onPress={() => navigation.navigate(route.name)}
                    />
                )
            })}
            </View>
        </BlurView>
    )
};

type TabBarComponentProps = {
    active?: boolean
    options: BottomTabNavigationOptions
    // onLayout: (e: LayoutChangeEvent) => void
    onPress: () => void
  };

const TabBarComponent = ({options, onPress, active}: TabBarComponentProps) => {
    const ref = useRef(null);
    const changeColor = () => {
        if(active){
            return {focused: true, color: '', size: 24}
        } else {
            return {focused: false, color: 'white', size: 24}
        }
        
    }
    
    useEffect(() => {
        if(active){
            changeColor();
        }
    }, [active])
    return(
        <Pressable style={styles.component} onPress={onPress}>
            <View style={styles.iconContainer}>
            {
                active ? <View style={styles.dotStyle}/> : <View />
            }
            
            {options.tabBarIcon ? options.tabBarIcon(changeColor()) : <Text>?</Text>}
            </View>
            
        </Pressable>
    )
}

export default function BottomTabNavigation(){
    return(
        <View style={{flex: 1}}>
            <Tab.Navigator 
            tabBar={(props) => <AnimatedTabBar {...props}
            />}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}
            >
                <Tab.Screen 
                name="home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <HomeIconWithLinearGradient color={color}/>,
                }}/>
                <Tab.Screen 
                name="stocks" 
                component={StockScreen}
                options={{
                    tabBarIcon: ({color, size}) => <StockIconWithLinearGradient color={color}/>,
                }}
                />
                <Tab.Screen 
                name="nft" 
                component={NftScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <WalletIconWithLinearGradient color={color}/>,
                }}
                />
                <Tab.Screen 
                name="wallet" 
                component={WalletScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <SettingsIconWithLinearGradient color={color}/>,
                }}
                />
            </Tab.Navigator>
        </View>
    )
};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        width: width * 0.8,
        bottom: 0,
        height: 70,
        marginBottom: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    activeBackground: {
      position: 'absolute',
    },
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    component: {
      height: 60,
      width: 60,
      margin: 5
    },
    componentCircle: {
      flex: 1,
      borderRadius: 30,
      backgroundColor: '#FF6A48',
    },
    iconContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      height: 36,
      width: 36,
    },
    dotStyle: {
        position: 'absolute',
        width: 4,
        height: 4,
        borderRadius: 100,
        backgroundColor: '#0EEA7C',
        top: 7
    }
  });