import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, SafeAreaView, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { HomeIconWithLinearGradient } from '../components/svg/Svg';
import Button from '../components/button/Button';
import axios from 'axios';
import StockFlatList from '../components/StockFlatList';

const { width, height } = Dimensions.get('window');


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

const StockScreen = () => {
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
            const response = await axios.get('https://api.coinlore.net/api/tickers/?limit=10');
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
        <View style={styles.textInputCont}>
            <TextInput 
            style={styles.textInputStyle}
            placeholder='Search coins...'
            />
        </View>
        <View style={styles.stockView}>
        {loading && cryptoData.length < 1 ? 
        <ActivityIndicator size={30}/> : 
        <StockFlatList cryptoData={cryptoData}/>
        } 
        </View>      
    </SafeAreaView>
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
    stockView: {
        margin: 16,
        marginBottom: 150
    },
    textInputCont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textInputStyle: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10
    }
})