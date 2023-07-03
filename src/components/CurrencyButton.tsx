import React from 'react'
import {View ,Text , StyleSheet} from 'react-native'
import { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.container}> 
        <Text>{props.name}</Text>
        <Text>{props.flag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center"
    },
    flag : {
        fontSize : 28,
        color : '#FFFFFF',
        marginBottom : 4
    },
    country : {
        fontSize : 14,
        color : '#2d3436',
        marginBottom : 4
    }
})

export default CurrencyButton