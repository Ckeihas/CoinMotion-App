import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { HomeIconWithLinearGradient } from '../components/svg/Svg';
import Button from '../components/button/Button';

const { width, height } = Dimensions.get('window');

const StockScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#011292', '#000D6E', '#000A52']}
        style={styles.linearGradient}
        />
    </View>
  )
};

export default StockScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: height,
        width: width
    },
})