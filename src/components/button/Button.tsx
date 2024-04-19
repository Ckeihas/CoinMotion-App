import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Button = ({title, width}: {title: string, width: number}) => {
  return (
    <LinearGradient 
    colors={['#0EEA7C', '#17FFF8']}
    style={[styles.linearGradientStyle, {width: width}]}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  )
}

export default Button;

const styles = StyleSheet.create({
    linearGradientStyle: {
        padding: 13,
        borderRadius: 10,
        zIndex: 2,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold'
    }
})
