import React, { Component } from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default class App extends Component {

constructor(){
    super()
    this.state = {}
}

setNumber = (button) => {
    console.log(cavid, atamoglan);
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

const buttonsArray = [7,8,9,'+',4,5,6,'-',1,2,3,'x',0,'.','=','/'];
return (
<View style={styles.Container}>
    <View style={styles.Result}>
        <Text style={styles.resultText}>10/5</Text>
    </View>
    <View style={{flexDirection: 'row',margin: 5, flexWrap: 'wrap', width: '100%'}}>
     {buttonsArray.map((item, index) => <TouchableOpacity onPress={() => this.setNumber(index, item)} style={{width: '23.5%' , height: '21.35%' , backgroundColor: index === 3 || index === 7 || index === 11 || index === 15? '#8B0000' : 'red' , justifyContent: 'center', alignItems: 'center', margin: 2, borderRadius: 20}}><Text style={{color: 'white', fontSize: 100}}>{item}</Text></TouchableOpacity>)}
    </View>
        {/* <View style={styles.Result}>
            <Text style={styles.resultText}>10/5</Text>
        </View>
        <View style={styles.Calculation}>
            <Text style={styles.calculationText}>50</Text>
        </View>
        <View style={styles.Buttons}>
            <View style={styles.Numbers}>
                <View style = {styles.Row}>

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
        </View> */}
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
        flexWrap: 'wrap',
    },
    Result: {
        height: '30%',
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