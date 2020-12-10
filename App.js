import React, { Component } from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default class App extends Component {

constructor(){
    super()
    this.state = {}
}

render() {
/*let rows = []
let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
for (let i=0; i<=3; i++){
    let row = []
    for(let j=0; j <= 2; j++){
        row.push(<TouchableOpacity style= {styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
}*/
let operations = ['+','-','*','/']
let ops = []
for(let i=0; i<4; i++) {
    ops.push(<TouchableOpacity style= {styles.btn}>
        <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
    </TouchableOpacity>)
}

return (

<View style={styles.Container}>
        <View style={styles.Result}>
            <Text style={styles.resultText}>10/5</Text>
        </View>
        <View style={styles.Calculation}>
            <Text style={styles.calculationText}>50</Text>
        </View>
        <View style={styles.Buttons}>
            <View style={styles.Numbers}>
                <View style = {styles.Row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >2</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.Row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >6</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.Row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >9</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.Row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >=</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Operations}>
                {ops}      
            </View>
        </View>
</View>

);

} } 
// const block (like a CSS)
const styles = StyleSheet.create({

    Container: {
        flex: 1,
    },
    resultText:{
        fontSize: 35,
        color : 'white',
    },
    btntext: {
        fontSize: 90,
        color: 'white'
    },
    white: {
        color: 'white',
    },
    btn: {
        flex:1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    calculationText: {
        fontSize: 35,
        color : 'white',
        
    },
    Row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Result: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#8B8B8B'
    },
    Calculation: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#A1A1A1'
    },

    Buttons: {
        flexGrow: 7,
        flexDirection: "row",
        backgroundColor:'white'
    },
    Numbers: {
        flex: 3,
        backgroundColor: 'black'
    },
    Operations: {
        flex: 1,
        backgroundColor: '#363636',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

    });