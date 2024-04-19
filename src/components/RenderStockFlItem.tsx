import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


interface IStockItem {
    id: number,
    title: string,
    initials: string,
    amount: number,
    value: number,
    currency: string,
    incOrDec: number
};


const RenderStockFlItem = ({item, index}: {item: IStockItem, index: number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image source={require('../../assets/etherium.png')} style={styles.cryptoLogo}/>
        <View style={{marginLeft: 10}}>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.amountText}>{item.amount}</Text>
                <Text style={styles.initialsText}>{item.initials}</Text>
            </View>  
        </View>
      </View>

      <View>
        <Text style={styles.valueText}>€ {item.value}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            {
                item.incOrDec > 0 ? 
                <AntDesign name="caretup" size={20} color="#0EEA7C" /> :
                <AntDesign name="caretdown" size={20} color="red" />
            }
            
            <Text style={[styles.incOrDecText, item.incOrDec > 0 ? {color: "#0EEA7C"} : {color: 'red'}]}>{item.incOrDec} %</Text>
        </View>
      </View>
    </View>
  )
};

export default RenderStockFlItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    cryptoLogo: {
        width: 50,
        height: 50
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