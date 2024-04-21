import React, { memo } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


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


const RenderStockFlItem = ({item, index}: {item: ICryptoData, index: number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        {/* <Image source={require('../../assets/etherium.png')} style={styles.cryptoLogo}/> */}
        <View style={styles.cryptoLogo}>
            <Text style={styles.symbolText}>{item.symbol}</Text>
        </View>
        <View style={{marginLeft: 10}}>
            <Text style={styles.titleText}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.amountText}>0.5</Text>
                <Text style={styles.initialsText}>{item.symbol}</Text>
            </View>  
        </View>
      </View>

      <View>
        <Text style={styles.valueText}>$ {item.price_usd}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            {
                Number(item.percent_change_24h) > 0 ? 
                <AntDesign name="caretup" size={20} color="#0EEA7C" /> :
                <AntDesign name="caretdown" size={20} color="red" />
            }
            
            <Text style={[styles.incOrDecText, Number(item.percent_change_24h) > 0 ? {color: "#0EEA7C"} : {color: 'red'}]}>{Number(item.percent_change_24h)} %</Text>
        </View>
      </View>
    </View>
  )
};

export default memo(RenderStockFlItem, (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    cryptoLogo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#5E7BE6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    symbolText: {
        color: 'white',
        fontWeight: 'bold'
    },
    leftCont: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15
    },
    amountText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '600',
        fontSize: 13
    },
    initialsText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '600',
        fontSize: 13,
        marginLeft: 5
    },
    valueText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
        alignSelf: 'flex-end'
    },
    incOrDecText: {
        fontWeight: '600',
        fontSize: 13,
        marginLeft: 5
    }
})