import React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

function StartGameScreen(props) {

    const [enteredValue, setEnteredValue] = useState('')

    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const handleInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g), '')
    }

    const handlerResetInput = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const handlerConfirmInput = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) return
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    // const confirmedOuput = confirmed ? <Text> Numero Elegido: {selectedNumber}</Text> : null
    let confirmedOuput
        if(confirmed) {
            confirmedOuput = (
                <Card styles={styles.summaryContainer}>
                    <Text>Tu Seleccion</Text>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <Button title='Empezar juego' onPress={() => props.onStartGame(selectedNumber)} />
                </Card>
            )
        }


    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text styles={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text>Elija un número</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={handleInputNumber}
                        value={enteredValue}
                    />
                    <View styles={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title='Limpiar' 
                                onPress={handlerResetInput} 
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title='Confirmar' 
                                onPress={handlerConfirmInput} 
                                color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOuput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    button: {
        width: 100
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen