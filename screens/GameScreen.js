import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import { Button } from 'react-native'

const gameScreen = props => {
    const generateRandomBetween = (min, max, exclude) =>{
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max - min) + min)
        if (rndNum === exclude)
            return generateRandomBetween(min, max, exclude)
        else
            return rndNum
    }
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userOption))


    return (
        <View style={styles.screen}>
            <Text>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Menor' onPress={()=> {}} />
                <Button title='Mayor' onPress={()=> {}} />

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default gameScreen