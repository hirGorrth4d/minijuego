import React from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

function StartGameScreen() {

const [enteredValue, setEnteredValue] = useState('')

const handleInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g), '')
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
                        <Button title='Limpiar' onPress={()=>{}} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                        <Button title='Confirmar' onPress={()=>{}} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
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
        marginVertical: 10
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