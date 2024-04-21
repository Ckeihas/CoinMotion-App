import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import RenderStockFlItem from './RenderStockFlItem'


const data = [
    {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        // amount: 0.065,
        price_usd: '67000',
        percent_change_24h: '-3.45',
        percent_change_1h: '0.89',
        percent_change_7d: '0.89'
    },
    {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: 2,
        // amount: 0.788,
        price_usd: '2900.43',
        percent_change_24h: '2.37',
        percent_change_1h: '0.89',
        percent_change_7d: '0.89'
        
    },
    {
        id: '3',
        symbol: 'SOL',
        name: 'Solana',
        rank: 3,
        // amount: 3.8,
        price_usd: '129.33',
        percent_change_24h: '0.89',
        percent_change_1h: '0.89',
        percent_change_7d: '0.89'
    },
]
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
const StockFlatList = ({cryptoData}: {cryptoData: ICryptoData[]}) => {
  return (
    <View style={{marginTop: 10}}>
      <FlatList 
      data={cryptoData}
      renderItem={({item, index}) => <RenderStockFlItem item={item} index={index}/>}
      />
    </View>
  )
}

export default StockFlatList
