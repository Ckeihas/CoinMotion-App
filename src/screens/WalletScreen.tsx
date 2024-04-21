import React from 'react'
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6, Feather, AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')
const WalletScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
        colors={['#011292', '#000D6E', '#000A52']}
        style={styles.linearGradient}
        />
      <View style={styles.totalBalanceCont}>
        <Text style={styles.totalBalanceText}>Total Balance</Text>
        <Text style={styles.balanceText}>$ 3,468.77</Text>
        <View style={styles.balanceChangeCont}>
            <FontAwesome6 name="arrow-trend-up" size={16} color="#0EEA7C" />
            <Text style={styles.balanceChangeText}>(+ 4.56%)</Text>
        </View>
      </View>
      <View style={styles.actionBtnCont}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.actionIconCont}>
                <Feather name="arrow-up-right" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Send</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={styles.actionIconCont}>
                <Feather name="arrow-down-right" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Recieve</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={styles.actionIconCont}>
            <AntDesign name="arrowsalt" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Swap</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={styles.actionIconCont}>
                <AntDesign name="plus" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Buy</Text>
        </View>
      </View>

      <View>
        <View>
            <Text>Popular</Text>
            <Text>See All</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <View style={styles.popularAssetCont}>
                <Image source={require('../../assets/Intersect-2.png')} style={styles.stockChartImg}/>
                <View style={styles.popularInfo}>
                    <Text style={styles.popularCryptoTitle}>Bitcoin</Text>
                    <View style={styles.popularCryptoAmount}>
                        <Text>BTC</Text>
                        <Text>$ 1,234.87</Text>
                    </View>
                </View>
            </View>
            <View style={styles.popularAssetCont}>
                <Image source={require('../../assets/Intersect-4.png')} style={styles.stockChartImg}/>
                <View style={styles.popularInfo}>
                    <Text style={styles.popularCryptoTitle}>Ethereum</Text>
                    <View>
                        <Text>ETH</Text>
                        <Text>$ 986.44</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default WalletScreen

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
    totalBalanceCont: {
        marginTop: 30,
        alignItems: 'center'
    },
    totalBalanceText: {
        color: 'rgba(255,255,255, 0.8)',
        fontWeight: 'bold',
        fontSize: 15
    },
    balanceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 5
    },
    balanceChangeCont: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        padding: 8,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    balanceChangeText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5
    },
    actionBtnCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 40
    },
    actionIconCont: {
        backgroundColor: '#5E7BE6',
        width: 60,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 8,
    },
    popularAssetCont: {
        width: 150,
        height: 160,
        backgroundColor: 'rgba(94, 123, 230, 0.5)',
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    stockChartImg: {
        width: 150,
        height: 130,
        bottom: 0,
        position: 'absolute'
    },
    popularInfo: {  
        flexDirection: 'row',
        bottom: 10,
        width: 140,
    },
    popularCryptoTitle: {
        marginRight: 'auto'
    },
    popularCryptoAmount: {
        marginRight: 'auto'
    }
})
