import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6, Feather, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import StockFlatList from '../components/StockFlatList';

interface ICryptoData {
    id: string,
    symbol: string,
    name: string,
    rank: number,
    price_usd: string,
    percent_change_24h: string,
    percent_change_1h: string,
    percent_change_7d: string
};

const { width, height } = Dimensions.get('window')
const WalletScreen = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);

    const FetchCryptoData = async () => {
        if(loading){
            return;
        };
        setLoading(true)
        console.log("One fetch")
        try {
            const response = await axios.get('https://api.coinlore.net/api/tickers/?limit=2');
            const data = response.data;

            const formattedData = data.data.map((crypto: any) => ({
                id: crypto.id,
                symbol: crypto.symbol,
                name: crypto.name,
                rank: crypto.rank,
                price_usd: crypto.price_usd,
                percent_change_24h: crypto.percent_change_24h,
                percent_change_1h: crypto.percent_change_1h,
                percent_change_7d: crypto.percent_change_7d
            }))

            setCryptoData(formattedData)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log("Error fetching crypto data: ", error)
        }
    };

    useEffect(() => {
        FetchCryptoData();
    }, [])

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

      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <View style={[styles.popularHeader, {marginBottom: 20}]}>
            <Text style={styles.popularText}>Popular</Text>
            <Text style={styles.seeAllText}>See All</Text>
        </View>
        <View style={styles.popularCont}>
            <View style={styles.popularAssetCont}>
                <Image source={require('../../assets/Intersect-2.png')} style={styles.stockChartImg}/>
                <View style={styles.popularInfo}>
                    <Text style={styles.popularCryptoTitle}>Bitcoin</Text>
                    <View style={styles.popularCryptoAmount}>
                        <Text style={styles.symbol}>BTC</Text>
                        <Text style={styles.amount}>$ 1,234.87</Text>
                    </View>
                </View>
            </View>
            <View style={styles.popularAssetCont}>
                <Image source={require('../../assets/Intersect-4.png')} style={styles.stockChartImg}/>
                <View style={styles.popularInfo}>
                    <Text style={styles.popularCryptoTitle}>Ethereum</Text>
                    <View style={styles.popularCryptoAmount}>
                        <Text style={styles.symbol}>ETH</Text>
                        <Text style={styles.amount}>$ 986.44</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>

      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <View style={styles.popularHeader}>
            <Text style={styles.popularText}>Assets</Text>
            <Text style={styles.seeAllText}>See All</Text>
        </View>
        {loading ? <ActivityIndicator size={32}/> : 
        <StockFlatList cryptoData={cryptoData}/>
        }
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
    popularHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popularText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    seeAllText: {
        color: '#0EEA7C',
        fontSize: 15
    },
    popularCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    popularAssetCont: {
        width: 160,
        height: 170,
        backgroundColor: 'rgba(94, 123, 230, 0.5)',
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    stockChartImg: {
        width: 160,
        height: 130,
        bottom: 0,
        position: 'absolute'
    },
    popularInfo: {  
        flexDirection: 'row',    
        width: 160,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    popularCryptoTitle: {
        marginLeft: 10,
        color: 'white',
        fontWeight: '600'
    },
    amount: {
        color: 'white',
        fontWeight: '600'
    },
    symbol: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '500',
        fontSize: 12,
        marginBottom: 5
    },
    popularCryptoAmount: {
        marginRight: 10,
        alignItems: 'flex-end',
    }
})
