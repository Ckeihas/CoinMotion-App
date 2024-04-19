import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import RenderStockFlItem from './RenderStockFlItem'


const data = [
    {
        id: 1,
        title: 'Bitcoin',
        initials: 'BTC',
        amount: 0.065,
        value: 67000,
        currency: '€',
        incOrDec: -3.45
    },
    {
        id: 2,
        title: 'Ethereum',
        initials: 'ETH',
        amount: 0.788,
        value: 2900.43,
        currency: '€',
        incOrDec: 2.37
    },
    {
        id: 3,
        title: 'Solana',
        initials: 'SOL',
        amount: 3.8,
        value: 129.33,
        currency: '€',
        incOrDec: 0.89
    },
]
const StockFlatList = () => {
  return (
    <View style={{marginTop: 10}}>
      <FlatList 
      data={data}
      renderItem={({item, index}) => <RenderStockFlItem item={item} index={index}/>}
      />
    </View>
  )
}

export default StockFlatList
