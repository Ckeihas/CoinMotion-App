import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from "nativewind";
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/button/Button';
import StockFlatList from '../components/StockFlatList';


const StyledView = styled(View)

const { width, height } = Dimensions.get('window');
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
        colors={['#011292', '#000D6E', '#000A52']}
        style={styles.linearGradient}
        />
        <View style={styles.header}>
            <View>
                <Text style={styles.helloText}>Hello!</Text>
                <Text style={styles.nameText}>Christian Keihäs</Text>
            </View>
            <View style={styles.profileImgCont}>
                <Image source={require('../../assets/man.png')} style={styles.profileImage}/>
            </View>
        </View>
        <BlurView intensity={80} style={styles.blurContainer}>
            <View style={styles.generalInfoCont}>
                <View>
                    <Image source={require('../../assets/etherium.png')} style={styles.ethLogo}/>
                </View>
                <View style={styles.generalInfoNumbers}>
                    <View style={styles.upOrDownCont}>
                        <AntDesign name="caretup" size={20} color="#0EEA7C" />
                        <Text style={styles.upOrDownText}>2.37%</Text>
                    </View>
                    
                    <Text style={styles.amounts}>2 900.43€</Text>
                </View>
            </View>
            <View style={styles.belowCont}>
                <View>
                    <Text style={styles.etheriumText}>Ethereum</Text>
                    <Text style={styles.cryptoAmount}>0.788 ETH</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Button title='View More' width={100}/>
                    </TouchableOpacity>
                </View>
            </View>
        </BlurView>

        <View style={styles.stockView}>
            <Text style={styles.coinHeaderText}>Coins</Text>
            <StockFlatList />     
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button title='Load More' width={150}/>
        </View> 
    </SafeAreaView>
  )
};

export default HomeScreen

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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30
    },
    profileImgCont: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10
    },
    profileImage: {
        width: 20,
        height: 20,
    },
    helloText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold',
        fontSize: 16,
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    generalInfoCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    generalInfoNumbers: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    upOrDownCont: {
        flexDirection: 'row',
    },
    upOrDownText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 19,
        marginLeft: 5,
        marginRight: 10
    },
    amounts: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 10
    },
    ethLogo: {
        width: 60,
        height: 60
    },
    belowCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 80
    },
    etheriumText: {
        color: 'rgba(255,255,255, 0.7)',
        fontWeight: '500',
        fontSize: 20
    },
    cryptoAmount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5
    },
    btnCont: {
 
    },
    blurContainer: {
        padding: 30,
        margin: 16,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
    },
    stockView: {
        margin: 16
    },
    coinHeaderText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold',
        fontSize: 16
    }
})
